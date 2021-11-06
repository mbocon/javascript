# Reversi
SEIR Unit 1 Final Project

- https://jrmartinez91.github.io/unit1_project.github.io/

# Challenges

During the creation process, the most challenging aspects of this project were:

- How can we determine the grid location of a space when accessing it via jQuery?

- How do we handle skipping turns?

- How do we create a convincing flip animation?

- How do we easily acess and manipulate grid spaces?

# technologies used

## 2D Array

At the center of my game's code is a global variable called 'spaceGrid'. spaceGrid is an array of 8 arrays, representing each row. Each of those 8 arrays has 8 elements, each of which represents a space. The spaces themselves are div elements created by jQuery when the page loads, and during the process of their creation, each one is assigned to a corresponding slot in the spaceGrid.

Doing this allows the program to navigate across spaces in ways that would otherwise be very difficult. For example, if a we begin with a space on the board represented by spaceGrid[y][x], we can travel up and down the space's column by changing the value of y, and travel across the space's row by changing the value of x. Likewise, we can move diagonally by changing the values of both x and y by the same amount.

Being able to traverse the gameboard like this is an essential aspect of the game's programming, as the central idea of Reversi is finding unbroken lines of tiles on the board, and changing those lines. 

## Animation

In the real-world counterpart of Reversi, the tiles are two-sided: white on one side and black on the other. I wanted to capture this feeling in my version of the game, and so decided from the beginning that there had to be some kind of tile-flipping animation when a piece was captured.

I found a very nice starter animation on animista.net, but there was one problem. Animista's example relied on two elements occupying the exact same place on the page, both with invisible backs. I didn't want to do that, because I was using the placement of divs, basically as part of the game's memory. So I came up with a workaround.

When a tile is flipped, the old tile disappears, and a new tile spawns in, but that new tile has a sepcial class that assigns it an animation that makes it so that when it first appears, it has the same color of the tile that disappeared, then turns the color that it's meant to be in the midst of a flipping animation. This crates the illusion that the old tile has transformed, rather than being replaced.

# Design Process

## Page Layout
The process began with a few wireframe sketches. I knew from the start that I wanted a general layout with three columns: a gameboard in the center and supplementary elements on either side, like a stage framed by curtains.

The layout of the page relies heavily on flexbox styling to get the elements in place, rather than margin, padding, or float. Every space on the gameboard is a flexbox in order to center the tile within it. Every row of spaces is a flexbox, in order to evenly space the spaces within it. The gameboard is a flexbox to evenly space the rows. The three large columns of the layout are flexboxes to center the gameboard and score cards within them, and the whole page is a flexbox to hold the columns side by side.

I decided early on to use several modals for different menus. I felt that it would be a clean way to organize a single page with more text than a single page could comfortably hold.

In the course of building the page, I did all the layout CSS before adding any javascript, and did all the javascript before adding any purely aesthetic CSS, such as background images, decorative outlines, and fonts.

## Game Mechanics
I decided early on that there would be two different rulesets, partially as a challenge to myself, and partially because the 'Freeform' rules are the rules I always played by when I was a child, and the 'Classic' rules seemed odd to me!

The ability to change player names came as a last-minute addition. I wanted to add a little something to at least partially make up for not being able to implement an AI opponent, as I had originally planned.

The on-click event of each individual space triggers all the other code. This is somewhat analogous to the 'update' function in traditional game development-- the loop that never stops running while the game is on. But in my game, all the info is updated when you click, and between clicks the game is essentially frozen

### Finding the Space that was Clicked

When a space's on-click event is called, the function captureCheck finds the event.currentTarget's location within the grid. First, it searches the spaceGrid for the row that contains our target. The target's index in the row is the X coordinate. It then asks the spaceGrid for the index of the row where we found the space. The row's index is the Y coordinate.

Now we know the space we clicked is at location spaceGrid[y][x].

### Win State

The code used to determine and display possible moves on each turn can also be used to detect when there *aren't* any possible moves. If that's the case for both players, the game is over, and the player with more tiles on the board wins.

This is tracked by a global variable called endCounter, which ticks up whenever a player has no possible moves, and resets when a player makes a move.

I concieved of the endCounter like a deuce in tennis-- where something has to happen twice in a row to get to the end state, and gets reset if it doesn't.

## Unresolved Issues

I had originally planned to add a computer-controlled opponent, but it never came to pass. I had designed a way for the computer to strategize--the inversePing function has a way of detecting how much 'damage' a move will do: how many tiles will be flipped in total. The comptuer was going to choose whichever move did the most 'damage'.

I had also originally planned for the tile-flipping animation to be more elaborate. I had wanted a kind of cascade effect where flips would radiate out from the tile that was just placed, rather than flipping all at once. The timing involved was just too much for me to handle though-- as was the task of coming up with a system to determine *which* tiles would flip *when*.



