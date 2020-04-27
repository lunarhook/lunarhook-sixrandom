
#!/bin/bash
function getdir(){
    for element in `ls $1`
    do  
        dir_or_file=$1"/"$element
        if [ -d $dir_or_file ]
        then 
            getdir $dir_or_file
        else
            if [ "${dir_or_file##*.}"x = "js"x ];then
                 cat  $dir_or_file >> source.txt
            fi
           
        fi  
    done
}
root_dir="$1"

getdir $root_dir