for (let pound_sign_count = 0; pound_sign_count < 7; pound_sign_count++)
{   
    let counter = 0;
    let newLine = "";
    while (counter <= pound_sign_count)
    {
        newLine += "#";
        counter++;

    }
    
    console.log(newLine);
}