console.log("Hello World")

//wait to choose a game mode
// classic -> true
// freeform -> false
let classic = false;

//no moves can be made while this is false
let gameOn = false;

//this variable turns to TRUE the first time a gamemode is selected,
//and stays TRUE until the page is refreshed
let firstGameBegun = false;

//options
////will moves that allow capture be highlighted?
highlightCapture = false;
////is player 1 competing against another human?
multiplayer = false;

//setup the 8x8 data structure
const spaceGrid = [ [],[],[],[],[],[],[],[]]
const tileGrid = [ [],[],[],[],[],[],[],[]]

//keep track of each player's score
let whiteScore = 0;
let blackScore = 0;

//endCounter controls the win state in Classic Mode
//it goes up by 1 when a player has no valid moves
//and is reset to zero when a player makes a move.
//when it reaches 2, the game is over
endCounter = 0;

//spaceCounter controls the win state in freeform mode
//it counts the number of spaces that have been filled in
//when it reaches 64, the game is over
spaceCounter = 0;

//the eight directions for the ping function
const eightDirections =[
    {deltax:1,deltay:0},    //Left
    {deltax:1,deltay:1},    //Lower Left
    {deltax:0,deltay:1},    //Down
    {deltax:-1,deltay:1},   //Lower Right
    {deltax:-1,deltay:0},   //Right
    {deltax:-1,deltay:-1},  //Upper Right
    {deltax:0,deltay:-1},   //Up
    {deltax:1,deltay: -1},  //Upper Left
]

$(()=>{

    //crucial jquery variables
    $gameboard=$('#gameboard')
    $whiteScoreDisplay = $('#white-score')
    $blackScoreDisplay = $('#black-score')

    //other global variables
    turnSwitch = true;
    //true = white's turn
    //false = black's turn

    //and heeeere weeee.......    go



    //on page load, spawn 8x8 grid in game board
    //this will take the form of 8 row-divs which each contain 8 space-divs
    for(let i=0;i<8;i++){
        $row = $('<div>').addClass("row");
        for(let j=0; j<8; j++){
            $space = $('<div>').addClass("space")
            $row.append($space)
            //add each space to the data structure
            spaceGrid[i][j]= $space;
        }
        $gameboard.append($row)
    }

    console.log(spaceGrid);
    //store the 8x8 grid in an array.

    //menu buttons

    //hide modals
    $('.modal').on('click',()=>{
        $clicked = $(event.target);
        //only hide the modal if the user clicks outside its text box...
        if($clicked.hasClass('modal')){
            $('.modal').css('display','none')
        }
        //...or clicks on one of the 'start a new game' buttons
        if($clicked.hasClass('start-button')){
            $('.modal').css('display','none')
        }
    })
    
    //show rules
    $('#rules-btn').on('click',()=>{
        $('#rules-modal').css('display','block');
    })

    //show options
    $('#options-btn').on('click',()=>{
        $('#options-modal').css('display','block');
    })
    //options
    $('#highlight-capture-btn').on('click',()=>{
        //if highlightCapture is currently ON, turn it OFF
        if(highlightCapture){
            highlightCapture = false;
            $(event.currentTarget).text("Show Possible Captures: OFF")
        }else{
            highlightCapture = true;
            $(event.currentTarget).text("Show Possible Captures: ON")
        }
    })

    //Custom names
    $('#custom-names').on('submit',(event)=>{
        event.preventDefault();
        $('#white-player-name').text($('#white-name').val());
        $('#black-player-name').text($('#black-name').val());
    })

    //show new game menu
    $('#new-game-btn').on('click',()=>{
        $('#select-modal').css('display','block');
    })

    //game modes
    $('#start-new-classic-btn').on('click',()=>{
        classic = true;
        resetBoard();
        //in classic mode, the board starts with a specific configuration--
        spaceGrid[3][3].append($('<div>').addClass('white-tile'))
        spaceGrid[3][3].addClass('clicked')

        spaceGrid[4][4].append($('<div>').addClass('white-tile'))
        spaceGrid[4][4].addClass('clicked')

        spaceGrid[3][4].append($('<div>').addClass('black-tile'))
        spaceGrid[3][4].addClass('clicked')

        spaceGrid[4][3].append($('<div>').addClass('black-tile'))
        spaceGrid[4][3].addClass('clicked')

        //we give White an automatic capturePossible
        //to show which moves are valid on the first turn
        //this is necessary because usually capturePossible is called
        //at the END of the OPPONENT's turn
        console.log("turnSwitch before forced capturePossible call",turnSwitch)
        capturePossible('.white-tile')
        firstGameBegun = true;
        gameOn = true;
    })

    $('#start-new-freeform-btn').on('click',()=>{
        classic = false;
        gameOn = true;
        resetBoard();
        spaceGrid[3][3].append($('<div>').addClass('white-tile'))
        spaceGrid[3][3].addClass('clicked')

        spaceGrid[4][4].append($('<div>').addClass('white-tile'))
        spaceGrid[4][4].addClass('clicked')

        spaceGrid[3][4].append($('<div>').addClass('black-tile'))
        spaceGrid[3][4].addClass('clicked')

        spaceGrid[4][3].append($('<div>').addClass('black-tile'))
        spaceGrid[4][3].addClass('clicked')
        firstGameBegun = true;
    })

    const resetBoard=()=>{
        console.log(">>>BOARD RESET<<<")
        //erase all tiles from the board
        $('.white-tile').remove();
        $('.black-tile').remove();
        //remove 'clicked' class from all spaces
        $('.space').removeClass('clicked');
        //remove 'possible capture' highlight color from all spaces
        $('.space').removeClass('juicyTarget');
        $('.space').css('background-color','transparent')
        //set scores to zero
        whiteScore = 0;
        blackScore = 0;
        $whiteScoreDisplay.text(whiteScore);
        $blackScoreDisplay.text(blackScore);
        //reset win state detectors
        spaceCounter = 0;
        endCounter = 0;
        //it's White's turn
        turnSwitch = true;
        //reset glow on scorecards
        $('.scorecard').removeClass('glowing')
        $('#white-scorecard').addClass('glowing')
        //enable gameplay
        gameOn = true;
      
    }


    //placing a tile
    $('.space').on('click',(event)=>{

        
        //check various condtions for this being a valid move
        if(validMove($(event.currentTarget))){
            endCounter = 0;
            spaceCounter += 1;

            //clear all highlighted spaces from the previous turn
            $('.space').css('background-color','transparent');


            if(turnSwitch){
                //place white tile
                $(event.currentTarget).append($('<div>').addClass('white-tile'))

            } else{
                //place black tile
                $(event.currentTarget).append($('<div>').addClass('black-tile'))

            }
            //mark this space as already clicked
            $(event.currentTarget).addClass('clicked')

            //capture any enemy pieces that can be captured
            captureCheck($(event.currentTarget));
    
            //change turns
            turnSwitch = !turnSwitch;

            //update score
            keepScore();


            //highlight the the OTHER player's valid moves for the next turn
            //and highlight their icon on the GUI
            if(turnSwitch){
                capturePossible('.white-tile');
                $('#white-scorecard').addClass('glowing')
                $('#black-scorecard').removeClass('glowing')
            } else {
                capturePossible('.black-tile');
                $('#black-scorecard').addClass('glowing')
                $('#white-scorecard').removeClass('glowing')
            }

            //if the current move has resulted in all space being filled
            if(spaceCounter>=64 && !classic){
                //end the game.
                winScreen();
            }

        }//if it's not a valid move, nothing happens

    })

    //const findGridLocation=($space)=>{}

    const validMove=($space)=>{
        let result = true;

        //if the game has not yet begun, or is in the middle of an animation,
        //then the user must be patient!!! geez!
        if(!firstGameBegun){
            result = false;
            alert("Please click 'New Game' to begin!")
        } else if(!gameOn){
            result = false;
        } else if($space.hasClass('clicked')){
            //check if space has already been clicked
            result = false;
        } else if(classic){
            //in must-flip mode, check if the player has clicked on a space
            //that allows a capture--
            if(!$space.hasClass('juicyTarget')){
                result = false;
                alert('You cannot place a tile here! In Classic Mode, every move must be a capture!')
            }
        }

        return result;
    }

    const captureCheck=($space)=>{

        let row
        let column

        //determine the space on the spaceGrid that the clicked tile occupies
        console.log($space);
        const myRow = spaceGrid.filter(function(e){
            //console.log("e",e)
            for(thing of e){
               // console.log("thing",thing)
               // console.log("thing[0]",thing[0])
                if(thing[0]==$space[0]){
                    return true;
                }
            }
        })
        //console.log("myRow",myRow)
        //console.log(myRow[0])

        row = spaceGrid.indexOf(myRow[0])
        //column = spaceGrid[row].indexOf($space)
        for(let i = 0; i<8; i++){
            if(spaceGrid[row][i][0] == $space[0]){
                column = i;
                break;
            }
        }
        
        console.log(">>>>>>>>A NEW CAPTURE CHECK IS STARTING<<<<<<<")
        console.log("starting from row",row,"column",column)

        //send a ping out in every direction to see if there's an opportunity
        //to capture
        for(dir of eightDirections){
            ping(row,column,dir.deltax,dir.deltay);
        }

    }

    //this right here is the heart of the system
    //row and column define the starting point on the spaceGrid
    //deltaX and deltaY define the direction the ping will go
    // (1,0) Left
    // (1,1) Lower Left
    // (0,1) Down
    // (-1,1) Lower Right
    // (-1,0) Right
    // (-1,-1) Upper Right
    // (0,-1) Up
    // (1,-1) Upper Left

    //ping() has TWO MODES: capture and detect
    //in CAPTURED mode, it changes the tiles on the board that have
    //been captured.
    //in DETECT mode, it returns a list of tiles that COULD be captured.
    const ping=(row,column,deltaX,deltaY)=>{
        console.log("pinging");

        //this variable will turn false when the ping hits a dead end
        continuePing = true;

        //define the space we're starting from
        Y = row
        X = column

        //define friend and enemy
        let friend
        let enemy
        //because addClass takes a class name WITHOUT the initial ".",
        //the variable used to assign a class to the newly created tiles
        //is different
        let newFriends
        
        //animClass adds a special animation to tiles that appear in a capture
        let animClass

        if(turnSwitch){
            friend = '.white-tile'
            enemy = '.black-tile'
            newFriends = 'white-tile'
            animClass = 'capture-white'
        } else {
            friend = '.black-tile'
            enemy = '.white-tile'
            newFriends = 'black-tile'
            animClass = 'capture-black'
        }
        //console.log("friend",friend)

        //will we capture?
        let capture = false;

        //enemy pieces encountered along the ping's path
        let targets = []

        //console.log("pinging at direction", deltaX, deltaY)

        while(continuePing){

            //define the next space in the path of the ping
            Y += deltaY
            X += deltaX

            
            //if we've reached the edge of the board, end the process and DO NOT capture
            if( X > 7 || Y > 7 || X < 0 || Y < 0){
                continuePing = false;
            }
            else {
                //otherwise, continue as normal
                //console.log(`checking locaton ${X},${Y}`)
                $currentSpace = spaceGrid[Y][X];
                
                //if it's an enemy space, record that space and continue
                if( $currentSpace.children(enemy).length > 0){
                    targets.push({x: X, y: Y})
                   // console.log("ENEMY STAND!", enemy)
                }
                //if it's a frindly space, end the process and capture
                else if ( $currentSpace.children(friend).length > 0){
                    continuePing = false;
                    capture = true;
                   // console.log("friendly tile", friend)
                }
                //if it's an empty space, end the process and DO NOT capture
                else if ( $currentSpace.children().length == 0){
                    continuePing = false;
                  //  console.log("empty")
                }
            }
        } // end while

        if(targets.length>0){
           // console.log("targets",targets)
        }

        //if the conditions for a capture have been met...
        if(capture){
            for(victim of targets){
                //find the jquery ID of the space in question
                $victimSpace = spaceGrid[victim.y][victim.x];
                //get rid of the (presumably enemy) tile currently on it
                $victimSpace.children().remove();
                //add a tile of friendly color
                $newTile = $('<div>').addClass(newFriends)
                /// ANIMATION
                // the added tiles have a special class that makes them start
                // off with the OPPOSITE color, then change as they flip
                $newTile.addClass(animClass)
                $victimSpace.append($newTile);
            }
        } // end capture

    }

    //updates the display of both player's scores
    const keepScore=()=>{
        console.log("updating score")

        let whiteCounter= 0;
        let blackCounter= 0;
        
        // search through the space grid for every tile
        // that has children of the specified class
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                if(spaceGrid[i][j].children('.white-tile').length>0){
                    whiteCounter++;
                } else if(spaceGrid[i][j].children('.black-tile').length>0){
                    blackCounter++;
                }
            }
        }

        console.log("white score:", whiteCounter, "| black score:", blackCounter)
        whiteScore = whiteCounter;
        blackScore = blackCounter;
        $whiteScoreDisplay.text(whiteScore);
        $blackScoreDisplay.text(blackScore);

    }

    //determines locations for possible captures
    const inversePing=(x,y,deltaX,deltaY)=>{
        //console.log("inverse-pinging")

        //this variable will turn false when the ping hits a dead end
        continuePing = true;

        //define the space we're starting from
        let Y = y
        let X = x

        //define friend and enemy
        let friend
        let enemy
        //because addClass takes a class name WITHOUT the initial ".",
        //the variable used to assign a class to the newly created tiles
        //is different
        //let newFriends

        //console.log("turnSwitch",turnSwitch)
        if(turnSwitch){
            friend = '.white-tile'
            enemy = '.black-tile'
           //newFriends = 'white-tile'
        } else {
            friend = '.black-tile'
            enemy = '.white-tile'
           // newFriends = 'black-tile'
        }
        console.log("friend",friend)

        //has a space where capture is possible been detected?
        let canCapture = false;

        //enemy pieces encountered along the ping's path
        let targets = []

        //the space where a capture is possible, if any
        let validSpace

        //console.log("pinging at direction", deltaX, deltaY)

        while(continuePing){

            //define the next space in the path of the ping
            Y += deltaY
            X += deltaX

            
            //if we've reached the edge of the board, end the process and DO NOT capture
            if( X > 7 || Y > 7 || X < 0 || Y < 0){
                continuePing = false;
            }
            else {
                //otherwise, continue as normal
                //console.log(`checking locaton ${X},${Y}`)
                $currentSpace = spaceGrid[Y][X];
                
                //if it's an enemy space, record that space and continue
                if( $currentSpace.children(enemy).length > 0){
                    targets.push({x: X, y: Y})
                    //console.log("ENEMY STAND!", enemy)
                }
                //if it's a frindly space, end the process and declare capture IMpossible
                else if ( $currentSpace.children(friend).length > 0){
                    continuePing = false;
                    //console.log("friendly tile", friend)
                }
                //if it's an empty space, end the process and declare capture possible
                else if ( $currentSpace.children().length == 0){
                    continuePing = false;
                    //BUT we can only capture if there was at least one enemy tile
                    //between the starting point and the empty space!!!
                    if(targets.length>=1){
                        canCapture = true;
                        validSpace = {x:X,y:Y,dmg:targets.length};
                    }
                    //console.log("empty")
                }
            }
        } // end while

        if(canCapture){
            return validSpace;
        } else {
            return "NONE";
        }

    }

    //check whether a player can capture any enemy tiles this turn.
    //if yes, highlights the spaces that would accomplish a capture
    //this function has an ALTERNATE MODE that detects possible captures without
    //changing anything on the board. which mode is active is determined by the
    //second parameter
    // false = normal
    // true = alternate

    capturePossible=(tileClass,altMode=false)=>{

        console.log("XXXXXXX A NEW 'CAPTURE POSSIBLE' CHECK IS STARTING XXXXXXX")

        //CLEAR all of the PREVIOUS TURN'S highlighted spaces
        $('.space').removeClass('juicyTarget');

        //basically what this has to do is find every tile of the argument's
        //specified color, and send out a ping from them but NOT to capture, only to
        //DETECT if capture is POSSIBLE

        //intialize a list of all spaces containing friendly tiles
        myTiles = []

        //initalize a list of all spaces where capture moves are possible
        juicyTargets = []


        // search through the space grid for every tile
        // that has children of the specified class
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                if(spaceGrid[i][j].children(tileClass).length>0){
                    myTiles.push({x:j,y:i})
                }
            }
        }
        //console.log(myTiles)

        //from each of these space we send out an INVERSE PING:
        //  rather than detecting a row of enemy tiles that ends in a friendly tile,
        //  we're looking for rows of enemy tiles that end in BLANK SPACES

        //for every friendly tile...
        for(space of myTiles){
            //send an inverse ping out in every cardinal direction
            for(dir of eightDirections){
                //and add any spaces it finds to our list
                juicyTargets.push(inversePing(space.x,space.y,dir.deltax,dir.deltay));
            }
        }

        //remove all those "NONE" strings.
        //(gotta be a better way to do this!)
        juicyTargets = juicyTargets.filter((e)=>{
            return (typeof(e) != "string")
        })

        //FOR THE PURPOSES OF AI OPPONENT STRATEGY  !!!!!!!!!!!
        // we need a way to have the system recognize that if two targets
        // have the same x and y coordinates, we need to add together their dmg scores
        // and delete the duplicate

        console.log("juicy Targets:",juicyTargets)

        if(juicyTargets.length==0){
            //in must-flip mode, no results returned means the player in question
            //must skip his turn!
            if(classic){ /////****CHANGE THIS BACK TO "IF CLASSIC" WHEN DONE****/
                if(endCounter<2){
                    endCounter += 1;
                    console.log("END COUNTER",endCounter);
                    if(turnSwitch){
                        setTimeout(function(){alert("Player White has no valid moves! Turn passes to Black")},50)
                        turnSwitch = !turnSwitch;
                        capturePossible('.black-tile',true);
                        $('.scorecard').removeClass('glowing')
                        $('#black-scorecard').addClass('glowing')
                    } else{
                        setTimeout(function(){alert("Player Black has no valid moves! Turn passes to White")},50)
                        turnSwitch = !turnSwitch;
                        capturePossible('.white-tile',true);
                        $('.scorecard').removeClass('glowing')
                        $('#white-scorecard').addClass('glowing')
                    }
                    //turnSwitch = !turnSwitch;
                    //this is where the classic mode's win state is calcualted
                    //if the OTHER player ALSO has no valid moves, the game is over.
                }
                if(endCounter>=2){
                    //when the end counter reaches 2
                    setTimeout(function(){alert("No more moves are possible!")},100);

                    winScreen();

                }

            }
        } else {
            if(endCounter<2){
                //compile a list of possible targets
                for(space of juicyTargets){
                    spaceGrid[space.y][space.x].addClass('juicyTarget');
                }
                if(highlightCapture&& !altMode){
                    $('.juicyTarget').css('background-color','rgba(241, 241, 241, 0.6)')
                }
                else{
                    $('.juicyTarget').css('background-color','transparent')

                }
            }
            //in classic mode, this will be used by the validMove function to disallow
            //moves that do not result in captures
            //if 'show possible captures' is ON, these spaces will be highlighted.
        }
    }

    const winScreen=()=>{
        //disable gameplay
        gameOn= false;
        //determine who won
        keepScore();

        if(whiteScore==blackScore){
            $('#winner').text("It's a Draw!")
        }else{
            //Look Ma, I used a ternary!
            const winnerName = (whiteScore>blackScore) ? $('#white-player-name').text() : $('#black-player-name').text() ;
            //display that name in the win screen modal
            $('#winner').text(winnerName+" wins the game!")
        }

        //display the win screen
        $('#win-modal').css('display','block')
    }


})