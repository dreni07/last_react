import React,{useState,useEffect} from 'react';
import {View,Text,FlatList} from 'react-native';

const ApiScreen = () => {
    const [data,setData] = useState([]);

    const fetchData = async () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res=>{
            return res.json();
        }).then(ans=>{
            setData(ans);
        })
    }

    useEffect(()=>{
        fetchData();
    },[]);
    return (
        <View>
            <Text>Api Data</Text>
            <FlatList
                data={data}
                keyExtractor={(d)=>d.id.toString()}
                renderItem={(item)=>{
                    return (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default ApiScreen;