#!/bin/bash

node extract.js > urls.txt 

# len=$(wc -l <urls.txt)
# for ((i=0; i<$len; i++))
# do
#     sed 's/^/wget --output-document $i .jpg /' urls.txt > downloadimages.sh
# done

len=$(wc -l urls.txt | awk '{print $1}')
for ((i=1; i<$len; i++))
do
    sed "s/^/wget /" urls.txt > downloadimages.sh
done

# # rename files
# a=1
# for i in *.jpg; do
#   new=$(printf "%04d.jpg" "$a") #04 pad to length of 4
#   mv -i -- "$i" "$new"
#   let a=a+1
# done