# browser-tools-server
A web server to replicate browser actions

### Install NVM and node version 8.9.0
```
touch ~/.bash_profile
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
source ~/.bash_profile
nvm install 8.9.0
nvm use 8.9.0
nvm alias default 8.9.0
```

### Install local dependencies from project directory
```npm install``` or ```yarn install```

## Supported combinations
google chrome and firefox browsers are supported on ubuntu based linux platform

### Starting server on your machine
You can access the application at `localhost:3000`

### For starting a browser
```
curl -XPOST 'localhost:3000/start?browser=chrome&url=github.com'
```

### For stopping a browser
```
curl -XPUT 'localhost:3000/stop?browser=chrome
```

### For cleaning up a browser
```
curl -XDELETE 'localhost:3000/cleanup?browser=chrome
```

### For getting last visited url
```
curl -XGET 'localhost:3000/geturl?browser=chrome
```
