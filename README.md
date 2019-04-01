## ngFlow | WIP

An angular module to create control flow and data flow diagrams

## Difference between control flow and data flow
<WIP>

## Usage

For the demo: `ng serve` (runs on `localhost:4200`)
To build `ngxflowchart`: `ng build ngxflowchart`

## SVG vs HTML5 elements to render the graph
HTML5 seems easier to manipulate and implement

## Roadmap

[X] Update to angular 7
[X] Add a library using the `angular-cli`; `ng generate library ngflow`; The project appears unders `projects`. This will need to be built before use
[X] Use the library in a demo 
I didn't add the prefix so all the library components were generated with the lib prefix. To delete it: https://stackoverflow.com/questions/50243023/how-to-remove-a-created-library-in-angular6; 
`public_api.ts` is the entry file. This exports everything from the library that'll be public.
Awesome resource: https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5
- Add the library
- Build the library
- Import the library in `app.module.ts` ... always import the entire module, not individual files
( if the module is not found, make sure you've built the module first. restart the server after building)

[X] Add a simple node and wire and render it
[] Add position data to node and wire
[] Render a graph using a data structure
[] Add ability to drag nodes
[] Add ability to connect nodes
[] Add ability to transfer data between nodes
[] Add callback to process content flowing through node
[] Add multiple inputs to node
 
## Run this app

`ng serve`



