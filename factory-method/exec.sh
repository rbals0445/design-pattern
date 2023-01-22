#!/bin/bash
threshold=0

full_name=$1
js_file_name=$full_name.js # index.js

rm ./$js_file_name # 현재 폴더안에 있는 index.js 삭제

tsc $1.ts
while [ $threshold -le 7 ] && [ ! -f $js_file_name ]
do
    echo sleep;
    sleep 1;
    threshold=expr $threshold + 1;
done
node $js_file_name # index.js

