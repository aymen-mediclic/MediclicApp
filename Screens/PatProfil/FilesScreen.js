// documents patient
import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity,ActivityIndicator } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { url1, url2 } from '../../Navigation/GlobalUrl';
import { Segment } from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Modal from 'react-native-modal';
import FilterRdv1 from './FiltrerRdv1';
export default function FScreen({ navigation }) {
    const [Data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [filterDataHandler, setFilterDataHandler]   = useState([])
    useEffect(() => {
        fetch(url1)
        return fetch(url2+'/api/profil?uid=26&get_file')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                setData(res);
                setLoading(false)
                setFilterDataHandler({
                    filterData:res.files,
                    filterFields:{ profess: '',piecej: '', specilict: '', dateRdv: '',dateAjt:''}
                    
                })
            })
            .done();
    }, []);
    // fonction utilise dans le renderitem de la flatlist
    function Item({ item }) {
        return (
            <View style={styles.item}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between'}}>
                                    <Text style={{flex:1,height:40,padding:10,marginBottom:'2%',fontWeight:'bold',textAlign:'center',color:'white',backgroundColor:'#1E79C5'}}>{item.categorie}</Text>
                                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between",marginVertical:'1%',marginTop:'3%' }}>
                    <Text style={{...styles.title,flex:2}}>Ajouté Par</Text>
                    <Text style={{...styles.title,width:15}}>:</Text>
                    <Text style={{...styles.title1,flex:4}}>{item.ajouter_par}</Text>
                </View>
                <View style={{ flexDirection: "row",/*justifyContent:"space-between"*/marginVertical:'1%'  }}>
                    <Text style={{...styles.title,flex:2}}>Date d'ajout</Text>
                    <Text style={{...styles.title,width:15}}>:</Text>
                    <Text style={{...styles.title1,flex:4}}>{item.create_date}</Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between",marginVertical:'1%' }}>
                    <Text style={{...styles.title,flex:2}}>Date du RDV</Text>
                    <Text style={{...styles.title,width:15}}>:</Text>
                    <Text style={{...styles.title1,flex:4}}>{item.dtae_rdv}</Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between",marginVertical:'1%'  }}>
                    <Text style={{...styles.title,flex:2}}>RDV avec</Text>
                    <Text style={{...styles.title,width:15}}>:</Text>
                    <Text style={{...styles.title1,flex:4}}>{item.rdv_avec}</Text>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"space-between",marginVertical:'1%' }}>
                    <Text style={{...styles.title,flex:2}}>Spécialité</Text>
                    <Text style={{...styles.title,width:15}}>:</Text>
                    <Text style={{...styles.title1,flex:4}}>{item.speciality}</Text>
                </View>
                <TouchableOpacity style={{flexDirection:'row',alignSelf:'flex-end',margin:15,marginTop:8,marginBottom:3}}>
                    <Text style={{marginRight:10,fontWeight:'bold',color:'#1E79C5',textDecorationLine:'underline'}}>
                    {item.nom_file}
                    </Text>
                <FontAwesome name="download" size={24} color="#1E79C5" />
                </TouchableOpacity>
                
            </View>
        );
    }

    //RENDER ITEM
    
    
    
    //END

    let displayLoading=() => {
        if (loading) {
          //Loading View while data is loading
          return (
            <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
              <ActivityIndicator size="large" color="#1E79C5" />
              
            </View>
          );
        }
      }
      // fonction filtrer la data selon le type du champ
      const filterTextHandler = async (text,type)=>{

        let updatedText = {}
        
        if(type == "specilict"){

            updatedText = {
                ...filterDataHandler.filterFields,
                "specilict": text
            }
        }else if(type == "profess"){
            updatedText ={
                ...filterDataHandler.filterFields,
                "profess": text
            }
        }else if(type == "piecej"){
            updatedText ={
                ...filterDataHandler.filterFields,
                "piecej": text
            }
        }else if (type == "dateRdv"){
            updatedText ={
                ...filterDataHandler.filterFields,
                "dateRdv": text
         } }else if (type == "dateAjt"){
                updatedText ={
                    ...filterDataHandler.filterFields,
                    "dateAjt": text
                }
        }else{
            console.log("else")
            updatedText = {...filterDataHandler.filterFields}
        }

        filterHandler(updatedText)
    }
// traitement des filtres
    const filterHandler = async (filterText)=>{
        
        const {profess, piecej, specilict, dateRdv,dateAjt} = filterText
        const result  = await Data.files.filter(i =>{
            i = i[0]
            const _profess      = (i.rdv_avec)?i.rdv_avec: '';
            const _nom_file = (i.nom_file)?i.nom_file: '';
            const _speciality   = (i.speciality)?i.speciality: '';
            const _date_rdv     = (i.dtae_rdv)?(i.dtae_rdv.split(" ")[0]): '';
            const _date_ajt    = (i.create_date)?(i.create_date.split(" ")[0]): '';
            if(dateRdv !== ""){
                return (_date_rdv == dateRdv)
            }
            if(dateAjt !== ""){
                return (_date_ajt == dateAjt)
            }
            else{
                return  (
                    _profess.toLowerCase().includes(profess.toLowerCase()) &&
                    _nom_file.toLowerCase().includes(piecej.toLowerCase()) &&
                    _speciality.toLowerCase().includes(specilict.toLowerCase())
                )
            }
        })
        setFilterDataHandler({
            filterFields: filterText,
            filterData: result,
        })
        
    }
// remetre a zero la Data affiches
    const resetFilter = ()=>{
        setFilterDataHandler({
            filterData: [...Data.files],
            filterFields:{ profess: '',piecej: '', specilict: '', dateRdv: '',dateAjt: ''}
        })
    }
    const closeModal = ()=>{
        setModalVisible4(false)
    }

    return (


        <View style={{ flex: 1, justifyContent:'center' }} >
        <Segment style={{ justifyContent:'center',backgroundColor: '#1E79C5', height: 50 }}>
          <TouchableOpacity style={{alignSelf:'center',backgroundColor:'#1E79C5',height:30, padding: 5 ,alignItems: 'center',flexDirection:'row',borderWidth:1,borderColor:'white'}}  onPress={() => setModalVisible4(true)} >
            <Fontisto color='white' size={16} name={'equalizer'}  />
            <Text style={{color:'white',width:70,textAlign:'center'}}>Filtrer</Text>
          </TouchableOpacity>
        </Segment>
        <Modal  isVisible={modalVisible4}
                    animationIn  = "slideInLeft"
                    animationOut = "slideOutLeft"
                    style        = {{margin: 0}}>
                
                    <FilterRdv1 
                        filterTextHandler = {filterTextHandler}
                        resetFilter       = {resetFilter}
                        filterFields      = {filterDataHandler.filterFields}
                        closeModal={closeModal}
                    />
                
                </Modal>
                {
                (filterDataHandler && filterDataHandler.filterData)
                    ?
                    <FlatList
                        data={filterDataHandler.filterData}
                        renderItem={({ item }) => <Item item={item[0]} />}
                        keyExtractor={item => item[0].id.toString()}
                    />
                    :
                    displayLoading()
            }

        </View >

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        backgroundColor: 'white',
        paddingBottom: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 4,
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
                        height: 1,
            width: 0,
        },
        elevation: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft:15
    },
    title1: {
        fontSize: 15,
       // marginHorizontal:15
    },
});