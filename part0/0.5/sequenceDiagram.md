```mermaid
sequenceDiagram
    participant client
    participant server
    
    client ->> server: GET /exampleapp/spa
    activate server
    server -->> client: spa HTML file
    deactivate server
    
    client ->> server: GET /exampleapp/main.css
    activate server
    server -->> client: main.css CSS file
    deactivate server

    client ->> server: GET /exampleapp/spa.js
    activate server
    server -->> client: spa.js JS file
    deactivate server
    
    client ->> server: GET /exampleapp/data.json
    activate server
    server -->> client: JSON data
    deactivate server
```
