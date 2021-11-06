$(()=>{

    $test = $('#test-subject');

    $('#test-one').on('click',(event)=>{
        $test.toggleClass('flip-vertical-right');
    })

})