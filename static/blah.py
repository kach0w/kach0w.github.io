with open("books.json", "r") as f:
    lines = f.readlines()
with open("books.json", "w") as f:
    for line in lines:
        if line.__contains__("quote"):
            continue
        if line.__contains__("longitood"):
            continue
        if "author" in line: # Use 'in' instead of __contains__
            # 1. Remove the newline character
            temp_line = line.rstrip('\n') 
            
            # 2. Remove the comma ONLY IF it's the very last character remaining
            # We also rstrip() any extra whitespace just in case.
            cleaned_line = temp_line.rstrip().rstrip(',')
            
            # 3. Write the cleaned line followed by a mandatory newline
            f.write(cleaned_line + '\n')
        else:   
            f.write(line)
