arr1=(*)
echo ${arr1[@]}
total=${#arr1[@]}
for(( i=0; i<$total; i++ ))
do
	if [ -f "${arr1[$i]}/deploy.json" ]
	then
        cd ${arr1[$i]}
        npm install
        npm run test
		cd ..
	fi
done