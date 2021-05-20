const path=require("path");
const nodeExtrnals=require('webpack-node-externals');
const WebPackDonePlugin=require('./webpack-plugins/webPackDonePlugin');
module.exports={
plugins:[new WebPackDonePlugin({options:true})],
entry:'./src/index.ts',
watch:true,
externals:[nodeExtrnals()],
mode:'production',
target:'node',
output:{
    path:path.resolve(__dirname,'build'),
    filename:'index.js'
},
resolve:{
    extensions:['.ts','.js']
},
module:{
    rules:[
        {
        test: /\.ts$/,
        use:['ts-loader']
        }
    ]
}
}