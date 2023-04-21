const fs=require('fs')

//读取文件夹下面文件名
const files=fs.readdirSync("./",(err,data)=>{
    if(err){
        console.log("failed")
        return 
    }
    // console.log("success",data)
    return data
})

files.forEach(item => {
    // console.log("item",item);
    let data=item.split('.')
    // console.log('data',data,+data[0])
    let f=+data[0]
    if(f&&f>0&&f<10){
        f=('0'+(+data[0])+'.'+data[1]||''+data[2]||'').replace('js','.js')
        console.log('fff',f);
        fs.renameSync(`./${item}`,f,err=>{
             if(err){
                console.log("err",err)
                return 
             }
             console.log("success")
        })
    }
});

// console.log('files',files);
//一个一个修改不方便 批量修改