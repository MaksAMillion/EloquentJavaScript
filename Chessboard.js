/*
    Write a program that creates a string that represents
    an 8x8 grid, using newline characters to separate
    lines. At each position of the grid there is either
    a space or a "#" character. The characters should 
    form a chessboard.

    When you have a program that generates this pattern,
    define a binding size = 8 and change the program so
    that it works for any size, outputting a grid of the
    given width and height.
*/

let bindingSize = 8;
let chessboardString = "";

for (let i = 0; i < bindingSize; i++)
{
    for (let j = 0; j < bindingSize; j++)
    {   
        if ((i + j) % 2 === 0)
        {
            chessboardString += " ";
        }
        else
        {
            chessboardString += "#";
        }
    }
    chessboardString += "\n";
}

console.log(chessboardString);