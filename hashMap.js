let twoSum = (array, sum) => {
    let hashMap = {},
      results = []

        for (let i = 0; i < array.length; i++){
            if (hashMap[array[i]]){
			
  console.log("tes", [hashMap[array[i]]]);
                results.push([hashMap[array[i]], array[i]])
            }else{
                hashMap[sum - array[i]] = array[i];
				console.log(hashMap)
            }
          }
          return results;
    }
