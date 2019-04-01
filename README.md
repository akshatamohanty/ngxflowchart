## ngxFlowchart (work in progress)

An angular module to create flow diagrams

## Usage

- For the demo: `ng serve` (runs on `localhost:4200`)
- To build `ngxflowchart`: `ng build ngxflowchart`
- Add `<flowchart [data]='flowchart_data'>` to use



## Workflow / Roadmap / Todolist

- [X] Update to angular 7
- [X] Add a library using `ng generate library ngflow`; The library appears unders `projects` folder. This will need to be built before use. Be sure to add the `--prefix` or angular appends `lib-` as default prefix. On adding a library, 3 changes take place: 
    - a project is added under `projects`
    - `angular.json` file changes in your main app
    - `tsconfig.json` file changes in your main app
    - To delete a library: https://stackoverflow.com/questions/50243023/how-to-remove-a-created-library-in-angular6
    - To create a library: https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5
- [X] Build the library: `ng build ngxflowchart`
- [X] Use the library in a demo: After building the library, you can directly import the module in your demo app. Make sure you've exported the module in `public_api.ts` file in your library folder though - this is your entrypoint file. 
- [X] Build the library
- [X] Import the library in `app.module.ts`; always import the entire module, not individual files. If the module is not found, make sure you've built the module first and restart the server after building
- [X] Add a simple node and wire and render it
- [X] Add position data to node and wire
- [X] Render a graph using a data structure
- [X] Add ability to drag nodes
- [] Add ability to connect nodes
- [] Add ability to transfer data between nodes
- [] Add callback to process content flowing through node
- [] Add multiple inputs to node
 

## Topics to explore

### Difference between control flow and data flow
### SVG vs HTML5 elements to render the graph