# 0.6: New note spa

## Exercise

Create a diagram depicting the situation where the user creates a new note using the single page version of the app. (spa)

## Answer
Diagram:

![diagram](./0.6.png)

Code:

```
title 0.6: New note

note over browser:
user writes a note to the input 
and clicks save button
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

note over server:
server processes the 
request and appends the 
user's note to JSON data
end note

note over browser:
browser appends user's note
to local notes list and show 
the updated one
end note
```
