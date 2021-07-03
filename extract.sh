#!/bin/bash

node extract.js > urls.txt 

len=$(wc -l urls.txt | awk '{print $1}')
for ((i=1; i<$len; i++))
do
    sed "s/^/wget /" urls.txt > downloadimages.sh
done
