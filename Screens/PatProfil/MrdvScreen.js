//Rdv Patient
import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList,AsyncStorage,Picker, TouchableHighlight, TouchableOpacity, Alert, ActivityIndicator, StatusBar, ViewPropTypes } from 'react-native'
import { url1, url2 } from '../../Navigation/GlobalUrl';
import Fontisto from 'react-native-vector-icons/Fontisto';
import M from 'react-native-vector-icons/MaterialCommunityIcons';
import F from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import FilterRdv from './FilterRdv';
import { Segment } from 'native-base';
//import * as NavigationService from '../Navigation/NavigationService';
// var BUTTONS = [ { text: "Documents", icon: "document",iconColor:"#16a085" },{ text: "Annuler", icon: "trash",iconColor:"#e74c3c" },{ text: "Fermer", icon: "close",iconColor:"black" }];
// var DESTRUCTIVE_INDEX = 2;
// var CANCEL_INDEX = 1;

export default function MrdvScreen({ navigation }) {
    const [Data, setData] = useState([]);
    const [filterDataHandler, setFilterDataHandler]   = useState([])
    const [modalVisible, setModalVisible]   = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);

    const [specilictHint, setSpecilictHint] = useState([])
    const [professHint, setProfessHint]     = useState([])
    const [addressHint, setAddressHint] = useState([])
    
    const [isFilter, setIsFilter]           = useState(false)
    const [Dial, setDial] = useState('');
    const [loading, setLoading] = useState(true);
    const[profess,setProfess]=useState('');
    const[responsable,setResponsable]=useState('');
    const[specialite,setSpecialite]=useState('');
    const[duree,setDuree]=useState('');
    const[source,setSource]=useState('');
    const[date_rdv_du,setDaterdv_du]=useState('');
    const[date_rdv_au,setDaterdv_au]=useState('');
    const[adresser_par,setAdressP]=useState('');
    const[tel,setTel]=useState('');
    const[context,setContext]=useState('');
    const[statut,setStatut]=useState('');
    const[service,setService]=useState('');
    const[adress_rdv,setAdress]=useState('');
    const[adress_rdv2,setAdress2]=useState('');
    const[create_rdv,setCreaterdv]=useState('');
    const[salle,setSalle]=useState('');
    const[typeR,setTypeR]=useState('');
    const[selectedValue,setSelectedValue]=useState('0');
    const [Id, setId] = useState('')
    const [Rdv_Id, setRdvId] = useState('')
    const[image,setImage]=useState(null);
    useEffect(() => {
        _retrieveData();
    }, []);
    const _retrieveData = async () => {
        try {
          
          let id = await AsyncStorage.getItem("id");
         
    
          if (id !== null) {
            // We have data!!
            console.log(id,"1!!");
            setId(id)
          }
        } catch (error) {
            console.log(error);
        }
        fetch(url1)
        return fetch(url2+'/api/profil?uid=71&get_rdv')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                setData(res)
                setFilterDataHandler({
                    filterData:res.rdvs,
                    filterFields:{ profess: '',address: '', specilict: '', dateRdv_du: '', dateRdv_au: "", status: ''}
                    
                })
                setLoading(false)
            })
            .done();
        }
    
        // changer statut un RDV
    function rot(){
        var formdata = new FormData()
        
        formdata.append( 'uid',Id),
        formdata.append('mode','supprimer_rdv'),
        formdata.append('rdv',Rdv_Id)
        console.log('--',formdata)
        fetch(url1)
        fetch(url2+'/api/delete_rdv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: formdata
       
        
    })

      .then((response) => response.json())
      .then((res) => {
        
        console.log("*********success***********")
        console.log(res)
        setData(res);
        
      })
      .done();
    }
    //Importer un document depuis memoire telephone
   const _pickDocument = async () => {
	    let result = await DocumentPicker.getDocumentAsync({});
		  alert(result.uri);
      console.log(result);
	}

//    const _pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//     });

//     alert(result.uri);
//     console.log(result)

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

    const displayLoading=() => {
        if (loading) {
          //Loading View while data is loading
          return (
            <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
              <ActivityIndicator size="large" color="#1E79C5" />
            </View>
          );
        }
    }

    // filtrer selon le champ
    const filterTextHandler = async (text,type)=>{

        let updatedText = {}
        
        if(type == "specilict"){
            updatedText = {
                ...filterDataHandler.filterFields,
                "specilict": text
            }
            if(text.trim().length > 0){
                const result  = await Data.rdvs.filter(i =>{
                    i = i[0]
                    const _speciality   = (i.speciality)?i.speciality: '';
                        return  ( _speciality.toLowerCase().includes(text.toLowerCase()))
                })
                setSpecilictHint(result)
            }else{
                setSpecilictHint([])
            }

        }else if(type == "profess"){
            updatedText ={
                ...filterDataHandler.filterFields,
                "profess": text
            }
            if(text.trim().length > 0){
                const result  = await Data.rdvs.filter(i =>{
                    i = i[0]
                    const _profess      = (i.profess)?i.profess: '';
                        return  (
                            _profess.toLowerCase().includes(text.toLowerCase())   
                        )
                })
                setProfessHint(result)
            }else{
                setProfessHint([])
            }
        }else if(type == "address"){
            updatedText ={
                ...filterDataHandler.filterFields,
                "address": text
            }
            if(text.trim().length > 0){
                const result  = await Data.rdvs.filter(i =>{
                    i = i[0]
                    const _adresser_par = (i.adresser_par)?i.adresser_par: '';
                        return  (
                            _adresser_par.toLowerCase().includes(text.toLowerCase())   
                        )
                })
                setAddressHint(result)
            }else{
                setAddressHint([])
            }
            

        }else if (type == "dateRdv_du"){
            updatedText ={
                ...filterDataHandler.filterFields,
                "dateRdv_du": text
            }
        }else if (type == "dateRdv_au"){
        
            updatedText ={
                ...filterDataHandler.filterFields,
                "dateRdv_au": text
            }
        }
        else if (type == "status"){
            updatedText ={
                ...filterDataHandler.filterFields,
                "status": text
            }
        }else{
            console.log("else")
            updatedText = {...filterDataHandler.filterFields}
        }

        // filterHandler(updatedText)
        setFilterDataHandler({
            ...filterDataHandler,
            filterFields: updatedText,
        })
    }

    // Traitment des filtres
    const filterHandler = async ()=>{

        const {filterFields} = filterDataHandler 
        const {profess, address, specilict, dateRdv_du,dateRdv_au, status} = filterFields
        const result  = await Data.rdvs.filter(i =>{
        
            i = i[0]
        
            const _profess      = (i.profess)?i.profess: '';
            const _adresser_par = (i.adresser_par)?i.adresser_par: '';
            const _speciality   = (i.speciality)?i.speciality: '';
            const _date_rdv     = (i.date_rdv)?(i.date_rdv.split(" ")[0]): new Date().now();
            const _status       = (i.statut)?(i.statut): '';
            const _date_split   = _date_rdv.split("-");
            const _date         = new Date(`${_date_split[2]}-${_date_split[1]}-${_date_split[0]}`).getTime()
            
            console.log(_date ,">=",  new Date(dateRdv_du).getTime() ,"&&",  _date ,"<=",  new Date(dateRdv_au).getTime())
            if(dateRdv_du !== ""){
                return ( _date >=  new Date(dateRdv_du).getTime() &&  _date <=  new Date(dateRdv_au).getTime())
            }else if(status !== ""){
                return _status.toLowerCase() == status.toLowerCase()
            }else{
                return  (
                    _profess.toLowerCase().includes(profess.toLowerCase()) &&
                    _adresser_par.toLowerCase().includes(address.toLowerCase()) &&
                    _speciality.toLowerCase().includes(specilict.toLowerCase())
                    
                )
            }
        })
        // setFilterDataHandler({
        //     filterFields: filterText,
        //     filterData: result,
        // })
        setFilterDataHandler({
            ...filterDataHandler,
            filterData: result,
        })
    }
//Mettre A etat initial la data
    const resetFilter = ()=>{
        setFilterDataHandler({
            filterData: [...Data.rdvs],
            filterFields:{ profess: '',address: '', specilict: '', dateRdv_du: '', dateRdv_au: ''}
        })
    }
    const closeModal = ()=>{
        setModalVisible4(false)
    }
    

    return (
                
        <View style={{ flex: 1, justifyContent:'center' }} >
            <Modal isVisible={modalVisible1} animationType='slide' >
                <TouchableOpacity style={{ alignSelf:'flex-end', height:35, width:35,borderRadius:35/2,backgroundColor:'#1E79C5',marginRight:'12%',padding:10}} onPress={() => setModalVisible1(false)}>
                    <Fontisto color='white' size={15} name={'close-a'} style={{ alignSelf: 'center',alignItems:'center',justifyContent:'center'}} />
                </TouchableOpacity>
                <View style={styles.modal} >
                    <Text style={{height:40,marginBottom:'2%',fontWeight:'bold',padding:5,justifyContent:'center',textAlign:'center',color:'white',backgroundColor:'#1E79C5',fontSize:19}}>Actions</Text>
                    <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',marginHorizontal:'3%',marginVertical:'2%'}} onPress={() => {setModalVisible1(false);setModalVisible3(true);}}>
                    <M color='#1abc9c' size={22} name={'file-document'} />
                        <Text style={{ fontSize: 18,marginLeft:10 }}>Ajouter un document</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',marginHorizontal:'3%',marginVertical:'2%'}} onPress={() => {setModalVisible1(false);setModalVisible2(true)} }>
                    <M color='red' size={22} name={'cancel'}/>
                        <Text style={{ fontSize: 18,marginLeft:10 }}>Annuler mon rendez-vous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',marginHorizontal:'4%',marginVertical:'2%'}} onPress={() =>  setModalVisible1(false) }>
                    <F color='#2980b9' size={22} name={'video'}/>
                        <Text style={{ fontSize: 18,marginLeft:10 }}>Visio</Text>
                    </TouchableOpacity>
                </View>
          </Modal>

          <Modal isVisible={modalVisible2} animationType='slide' transparent={true} >
             <TouchableOpacity style={{ alignSelf:'flex-end', height:35, width:35,borderRadius:35/2,backgroundColor:'#1E79C5',marginRight:'12%',padding:10}} onPress={() => setModalVisible2(false)}>
                  <Fontisto color='white' size={15} name={'close-a'} style={{ alignSelf: 'center',alignItems:'center',justifyContent:'center'}} />
                </TouchableOpacity>
           <View style={styles.modal} >
           <Text style={{height:40,marginBottom:'2%',fontWeight:'bold',padding:5,justifyContent:'center',textAlign:'center',color:'white',backgroundColor:'#1E79C5',fontSize:19}}>Annuler mon RDV</Text>
           <Text style={{ fontSize: 18,marginLeft:10,marginTop:'15%' }}>Etes-vous sûr(e) de vouloir annuler ce rendez-vous ?</Text>
                  <TouchableOpacity style={{alignSelf:'flex-end',borderRadius:3,marginHorizontal:'3%',marginTop:'27%',marginBottom:2,width:60,height:30,backgroundColor:'#1E79C5'}} onPress={() =>  {setModalVisible2(false); rot()} }>
                    <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:16}}>Ok</Text>
                  </TouchableOpacity>
              </View>
          </Modal>
          <Modal isVisible={modalVisible3} animationType='slide' transparent={true} >
        <View style={styles.modal1} >
           <Text style={{height:40,marginBottom:'2%',fontWeight:'bold',padding:5,justifyContent:'center',textAlign:'center',color:'white',backgroundColor:'#1E79C5',fontSize:19}}>Ajouter un document</Text>
           <View style={{flexDirection:'row',alignItems:'center',marginTop:30,marginBottom:20}}>
           <Text style={{ fontSize: 17,marginLeft:10,fontWeight:'bold' }}>Document :</Text>
           <TouchableOpacity onPress={()=>_pickDocument()} style={{alignSelf:'flex-end',marginLeft:40,width:150,height:30,borderRadius:5,backgroundColor:'#1E79C5',justifyContent:'center'}}>
                <Text style={{color:'white',alignSelf:'center'}}>Choisir un document</Text>
            </TouchableOpacity>
            </View>
           <Text style={{ fontSize: 17,marginLeft:10,marginTop:10,fontWeight:'bold' }}>Catégorie</Text>
           <View style={styles.Picker}>
           <Picker
                    mode='dropdown'
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue, "speciality"); }}
                >
                    <Picker.Item label="Séléctionner une catégorie" value="0" />
                    <Picker.Item label="Ordonnance de médicament(s)" value="1" />
                    <Picker.Item label="Compte rendu" value="2" />
                    <Picker.Item label="Ordonnance d'analyse(s)" value="3" />
                    <Picker.Item label="Résultat d'analyse(s)" value="4" />
                    <Picker.Item label="Ordonnance d'examen(s)" value="5" />
                    <Picker.Item label="Résultat d'examen(s)" value="6" />
                    <Picker.Item label="Consigne" value="5" />
                    <Picker.Item label="Autre" value="5" />
                </Picker>
                </View>
                  <View style={{flexDirection:'row',alignSelf:'flex-end',marginVertical:40}}>
                  
                  <TouchableOpacity style={{borderRadius:3,marginHorizontal:5,marginTop:20,marginBottom:5,width:80,height:30,backgroundColor:'#FFC617',justifyContent:'center'}} onPress={() =>  {setModalVisible3(false);} }>
                    <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:15}}>Annuler</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderRadius:3,justifyContent:'center',marginHorizontal:5,marginTop:20,marginBottom:5,width:80,height:30,backgroundColor:'#1E79C5'}} onPress={() =>  {setModalVisible3(false);} }>
                    <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:15}}>Ajouter</Text>
                  </TouchableOpacity>
                  </View>
              </View>
          </Modal>

            <Modal
                    
                    isVisible={modalVisible}
                >
                    
                    <ScrollView contentContainerStyle={styles.centeredView}>
                    <View style={{ flexDirection: "row", alignItems:'center',justifyContent: 'space-between',flex:1,padding:10,height:50,backgroundColor:'#1E79C5',borderTopLeftRadius:5,borderTopRightRadius:5}}>
                                        <Text style={{fontSize:17,fontWeight:'bold',textAlign:'center',color:'white'}}>RDV avec {profess}</Text>
                                        <TouchableOpacity style={{ flex: 1, alignItems: "flex-end", height: 30, justifyContent: 'center' }} onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                        <Fontisto color='white' size={16} name={'close-a'} style={{ justifyContent: 'center' }} />
                    </TouchableOpacity>
                      </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginTop:12 }}>
                                        <Text style={[styles.title,{flex:3}]}>Type de RDV</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        {typeR==='C'&&
                                        <Text style={[styles.title1,{flex:4}]}>Cabinet</Text>}
                                        {typeR==='D'&&
                                        <Text style={[styles.title1,{flex:4}]}>Domicile</Text>}
                                        {typeR==='V'&&
                                        <Text style={[styles.title1,{flex:4}]}>Visio</Text>
                                        }
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5 }}>
                                        <Text style={[styles.title,{flex:3}]}>Statut</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{statut?statut:"Non renseigné"}</Text>
                                       
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Date</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{date_rdv_du?date_rdv_du:"Non renseigné"}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Durée (en h)</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{duree?duree:"Non renseigné"}</Text>
                        </View> 
                        {context!='medecin'&&
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Service</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{service?service:"Non renseigné"}</Text>
                        </View>
                        }
                        {context!='medecin'&&
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Responsable</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{responsable?responsable:"Non renseigné"}</Text>
                        </View>
                        }
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Professionnel</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{profess?profess:"Non renseigné"}</Text>
                        </View>
                        
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Spécialité</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{specialite?specialite:"Non renseigné"}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>N° Téléphone</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{tel? tel:"Non renseigné"}</Text>
                        </View>
                        {context!='medecin'&&
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Salle</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{salle?salle:"Non renseigné"}</Text>
                        </View>
                        }
                         <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Adresse</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{adress_rdv?adress_rdv:"Non renseigné"}</Text>
                        </View> 
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Complément d'adresse</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{adress_rdv2?adress_rdv2:"Non renseigné"}</Text>
                        </View> 
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Source</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{source?source:"Non renseigné"}</Text>
                        </View> 
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Date de création</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{create_rdv?create_rdv:"Non renseigné"}</Text>
                        </View>
                        
                
                       
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5,marginBottom:15}}>
                                        <Text style={[styles.title,{flex:3}]}>Adressé par</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{adresser_par?adresser_par:"Non renseigné"}</Text>
                        </View> 
                        
                        
                    </ScrollView>
                    
                        
                </Modal>
                {/* <Modal
                    isVisible={modalVisible4}
                    animationIn  = "slideInLeft"
                    animationOut = "slideOutLeft"
                    style        = {{margin: 0}}
                >
                    
                </Modal> */}
                {/* <TextInput onChangeText = {filterHandler} /> */}
            <Modal isVisible={modalVisible4}
                animationIn  = "slideInLeft"
                animationOut = "slideOutLeft"
                style        = {{margin: 0}}>
                <FilterRdv 
                    filterTextHandler   = {filterTextHandler}
                    resetFilter         = {resetFilter}
                    filterFields        = {filterDataHandler.filterFields}
                    filterHandlerAction = {filterHandler}
                    closeModal          = {closeModal}
                    specilictHint       = {specilictHint}
                    addressHint         = {addressHint}
                    professHint         = {professHint}
                />
            </Modal>
            <Segment style={{ justifyContent:'center',backgroundColor: '#1E79C5', height: 50 }}>
                <TouchableOpacity style={{alignSelf:'center',backgroundColor:'#1E79C5',height:30, padding: 5 ,alignItems: 'center',flexDirection:'row',borderWidth:1,borderColor:'white'}}  onPress={() => setModalVisible4(true)} >
                    <Fontisto color='white' size={16} name={'equalizer'}  />
                    <Text style={{color:'white',width:70,textAlign:'center'}}>Filtrer</Text>
                </TouchableOpacity>
            </Segment>
                
            {
                (filterDataHandler && filterDataHandler.filterData)
                    ?
                    <FlatList
                        data={filterDataHandler.filterData}
                        renderItem={({ item }) => 
                        {
                            item = item[0]
                            return(
                                <View style={styles.item}>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between'}}>
                                        <Text style={{flex:1,height:40,padding:10,marginBottom:'2%',fontWeight:'bold',textAlign:'center',color:'white',backgroundColor:'#1E79C5'}}>RDV avec  {item.profess}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:'1%'}}>
                                        <Text style={[styles.title,{flex:3}]}>Spécialité</Text>
                                        <Text style={[styles.title,{width:15}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{item.speciality}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <Text style={[styles.title,{flex:3}]}>Date du RDV</Text>
                                        <Text style={[styles.title,{width:15}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{item.date_rdv}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <Text style={[styles.title,{flex:3}]}>Statut</Text>
                                        <Text style={[styles.title,{width:15}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{item.statut}</Text>
                                        
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:'2%' }}>
                                        <Text style={[styles.title,{flex:3}]}>Adressé par</Text>
                                        <Text style={[styles.title,{width:15}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{item.adresser_par}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <TouchableOpacity
                                            style={{ backgroundColor: '#FFC617', width: 90, borderRadius: 5,padding:5,marginHorizontal:15 }}
                                            onPress={() => {
                                                setModalVisible(true);
                                                setProfess(item.profess);
                                                setResponsable(item.responsable);
                                                setSpecialite(item.speciality);
                                                setTel(item.tel);
                                                setDaterdv_du(item.date_rdv);
                                                setStatut(item.statut);
                                                setService(item.service);
                                                setAdress(item.adress_rdv);
                                                setAdress2(item.adress2_rdv);
                                                setCreaterdv(item.create_rdv);
                                                setSalle(item.salle);
                                                setDuree(item.duree);
                                                setSource(item.source);
                                                setAdressP(item.adresser_par);
                                                setTypeR(item.type_rdv);
                                                setContext(item.context);
                                            }}
                                        >
                                            <Text style={styles.textStyle}>Détails</Text>
                                        </TouchableOpacity>
                                    
                                        <TouchableOpacity 
                                            style={{ backgroundColor: '#FFC617', width: 90,padding:5, borderRadius: 5,marginHorizontal:15 }} 
                                            onPress={() => {setModalVisible1(true);setRdvId(item.id)}
                                            /*ActionSheet.show(
                                            {
                                                options: BUTTONS,
                                                cancelButtonIndex: CANCEL_INDEX,
                                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                                //title: "Testing ActionSheet"
                                            },
                                            buttonIndex => {
                                                if (buttonIndex === 1) {
                                                    
                                                    Alert.alert(  
                                                        'Annuler',  
                                                        'Etes-vous sûr(e) de vouloir annuler ce RDV ?',  
                                                        [  
                                                            {  
                                                                text: 'Annuler',  
                                                                onPress: () => console.log('Cancel Pressed'),  
                                                                style: 'cancel',  
                                                            },  
                                                            {text: 'Oui', onPress:()=> rot()}]  
                                                    );  
                                                        
                                                    
                                                }
                                            }
                    
                                        )*/}>
                                            <Text style={styles.textStyle}> Actions</Text>
                                        </TouchableOpacity>
                                </View>
                            </View>
                        )}}
                        keyExtractor={item => item[0].id.toString()}
                        extraData={Data}
                    />
                    :
                    displayLoading()
                    
            }

        </View>
            
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    modal: {
        marginTop:3,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '80%',
        height: '40%',
        borderRadius: 5,
        //borderWidth:1
      },
      modal1: {
        marginTop:3,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '95%',
        height: '60%',
        borderRadius: 5,
        //borderWidth:1
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
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft:15
    },
    title1: {
        fontSize: 15,
        marginHorizontal:15
    },
    title2: {
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf:"center",
        color:'#1E79C5',
        marginVertical:10
    },
    textStyle: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 14,
        fontWeight:"bold"
    },
    centeredView: {
        //flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        //marginBottom: 60,
        //marginTop:30,
        backgroundColor: 'white',
        borderRadius:5,
        marginBottom:1
    },
    Picker: {
        borderColor:'#3498db', borderWidth:1,
        height:40,justifyContent:'center',
        marginHorizontal:10,marginVertical:10,
        borderRadius:5,
        
    },
});

/*import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList, Image,Picker, TouchableHighlight, TouchableOpacity, Alert, ActivityIndicator, StatusBar, ViewPropTypes } from 'react-native'
import { url1, url2 } from '../../Navigation/GlobalUrl';
import Fontisto from 'react-native-vector-icons/Fontisto';
import M from 'react-native-vector-icons/MaterialCommunityIcons';
import F from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import FilterRdv from './FilterRdv';
import { Segment } from 'native-base';
//import * as NavigationService from '../Navigation/NavigationService';
// var BUTTONS = [ { text: "Documents", icon: "document",iconColor:"#16a085" },{ text: "Annuler", icon: "trash",iconColor:"#e74c3c" },{ text: "Fermer", icon: "close",iconColor:"black" }];
// var DESTRUCTIVE_INDEX = 2;
// var CANCEL_INDEX = 1;

export default function MrdvScreen({ navigation }) {
    const [Data, setData] = useState([]);
    const [filterDataHandler, setFilterDataHandler]   = useState([])
    const [modalVisible, setModalVisible]   = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);

    const [specilictHint, setSpecilictHint] = useState([])
    const [professHint, setProfessHint]     = useState([])
    const [addressHint, setAddressHint] = useState([])
    
    const [isFilter, setIsFilter]           = useState(false)
    const [Dial, setDial] = useState('');
    const [loading, setLoading] = useState(true);
    const[profess,setProfess]=useState('');
    const[responsable,setResponsable]=useState('');
    const[specialite,setSpecialite]=useState('');
    const[duree,setDuree]=useState('');
    const[source,setSource]=useState('');
    const[date_rdv,setDaterdv]=useState('');
    const[adresser_par,setAdressP]=useState('');
    const[tel,setTel]=useState('');
    const[context,setContext]=useState('');
    const[statut,setStatut]=useState('');
    const[service,setService]=useState('');
    const[adress_rdv,setAdress]=useState('');
    const[adress_rdv2,setAdress2]=useState('');
    const[create_rdv,setCreaterdv]=useState('');
    const[salle,setSalle]=useState('');
    const[typeR,setTypeR]=useState('');
    const[selectedValue,setSelectedValue]=useState('0');

    const[image,setImage]=useState(null);
    useEffect(() => {
        fetch(url1)
        return fetch(url2+'/api/profil?uid=26&get_rdv')
            .then((response) => response.json())
            .then((res) => {
                console.log("repooooonse")
                console.log(res)
                setData(res)
                setFilterDataHandler({
                    filterData:res.rdvs,
                    filterFields:{ profess: '',address: '', specilict: '', dateRdv: '', status: ''}
                    
                })
                setLoading(false)
            })
            .done();
    }, []);
    function rot(){
        fetch(url1)
     return fetch(url2+'/api/delete_rdv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/javascript, **; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: JSON.stringify({
        uid:"26",
        'mode':'supprimer_rdv',
        'rdv': '149',

        
      })
    })

      .then((response) => response.json())
      .then((res) => {
        
        console.log("*********success***********")
        setData(res);
        
      })
      .done();
    }
   const _pickDocument = async () => {
	    let result = await DocumentPicker.getDocumentAsync({});
		  alert(result.uri);
      console.log(result);
	}

//    const _pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//     });

//     alert(result.uri);
//     console.log(result)

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

    const displayLoading=() => {
        if (loading) {
          //Loading View while data is loading
          return (
            <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
              <ActivityIndicator size="large" color="#1E79C5" />
            </View>
          );
        }
    }

    const filterTextHandler = async (text,type)=>{

        let updatedText = {}
        
        if(type == "specilict"){
            updatedText = {
                ...filterDataHandler.filterFields,
                "specilict": text
            }
            if(text.trim().length > 0){
                const result  = await Data.rdvs.filter(i =>{
                    i = i[0]
                    const _speciality   = (i.speciality)?i.speciality: '';
                        return  ( _speciality.toLowerCase().includes(text.toLowerCase()))
                })
                setSpecilictHint(result)
            }else{
                setSpecilictHint([])
            }

        }else if(type == "profess"){
            updatedText ={
                ...filterDataHandler.filterFields,
                "profess": text
            }
            if(text.trim().length > 0){
                const result  = await Data.rdvs.filter(i =>{
                    i = i[0]
                    const _profess      = (i.profess)?i.profess: '';
                        return  (
                            _profess.toLowerCase().includes(text.toLowerCase())   
                        )
                })
                setProfessHint(result)
            }else{
                setProfessHint([])
            }
        }else if(type == "address"){
            updatedText ={
                ...filterDataHandler.filterFields,
                "address": text
            }
            if(text.trim().length > 0){
                const result  = await Data.rdvs.filter(i =>{
                    i = i[0]
                    const _adresser_par = (i.adresser_par)?i.adresser_par: '';
                        return  (
                            _adresser_par.toLowerCase().includes(text.toLowerCase())   
                        )
                })
                setAddressHint(result)
            }else{
                setAddressHint([])
            }
            

        }else if (type == "dateRdv"){
            updatedText ={
                ...filterDataHandler.filterFields,
                "dateRdv": text
            }
        }else if (type == "status"){
            updatedText ={
                ...filterDataHandler.filterFields,
                "status": text
            }
        }else{
            console.log("else")
            updatedText = {...filterDataHandler.filterFields}
        }

        // filterHandler(updatedText)
        setFilterDataHandler({
            ...filterDataHandler,
            filterFields: updatedText,
        })
    }

    const filterHandler = async ()=>{

        const {filterFields} = filterDataHandler 
        const {profess, address, specilict, dateRdv, status} = filterFields
        const result  = await Data.rdvs.filter(i =>{
        
            i = i[0]
        
            const _profess      = (i.profess)?i.profess: '';
            const _adresser_par = (i.adresser_par)?i.adresser_par: '';
            const _speciality   = (i.speciality)?i.speciality: '';
            const _date_rdv     = (i.date_rdv)?(i.date_rdv.split(" ")[0]): '';
            const _status       = (i.statut)?(i.statut): '';

            if(dateRdv !== ""){
                return (_date_rdv == dateRdv)
            }else if(status !== ""){
                return _status.toLowerCase() == status.toLowerCase()
            }else{
                return  (
                    _profess.toLowerCase().includes(profess.toLowerCase()) &&
                    _adresser_par.toLowerCase().includes(address.toLowerCase()) &&
                    _speciality.toLowerCase().includes(specilict.toLowerCase())
                    
                )
            }
        })
        // setFilterDataHandler({
        //     filterFields: filterText,
        //     filterData: result,
        // })
        setFilterDataHandler({
            ...filterDataHandler,
            filterData: result,
        })
    }

    const resetFilter = ()=>{
        setFilterDataHandler({
            filterData: [...Data.rdvs],
            filterFields:{ profess: '',address: '', specilict: '', dateRdv: ''}
        })
    }
    const closeModal = ()=>{
        setModalVisible4(false)
    }
    

    return (
                
        <View style={{ flex: 1, justifyContent:'center' }} >
            <Modal isVisible={modalVisible1} animationType='slide' >
                <TouchableOpacity style={{ alignSelf:'flex-end', height:35, width:35,borderRadius:35/2,backgroundColor:'#1E79C5',marginRight:'12%',padding:10}} onPress={() => setModalVisible1(false)}>
                    <Fontisto color='white' size={15} name={'close-a'} style={{ alignSelf: 'center',alignItems:'center',justifyContent:'center'}} />
                </TouchableOpacity>
                <View style={styles.modal} >
                    <Text style={{height:40,marginBottom:'2%',fontWeight:'bold',padding:5,justifyContent:'center',textAlign:'center',color:'white',backgroundColor:'#1E79C5',fontSize:19}}>Actions</Text>
                    <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',marginHorizontal:'3%',marginVertical:'2%'}} onPress={() => {setModalVisible1(false);setModalVisible3(true);}}>
                    <M color='#1abc9c' size={22} name={'file-document'} />
                        <Text style={{ fontSize: 18,marginLeft:10 }}>Ajouter un document</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',marginHorizontal:'3%',marginVertical:'2%'}} onPress={() => {setModalVisible1(false);setModalVisible2(true)} }>
                    <M color='red' size={22} name={'cancel'}/>
                        <Text style={{ fontSize: 18,marginLeft:10 }}>Annuler mon rendez-vous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',marginHorizontal:'4%',marginVertical:'2%'}} onPress={() =>  setModalVisible1(false) }>
                    <F color='#2980b9' size={22} name={'video'}/>
                        <Text style={{ fontSize: 18,marginLeft:10 }}>Visio</Text>
                    </TouchableOpacity>
                </View>
          </Modal>

          <Modal isVisible={modalVisible2} animationType='slide' transparent={true} >
             <TouchableOpacity style={{ alignSelf:'flex-end', height:35, width:35,borderRadius:35/2,backgroundColor:'#1E79C5',marginRight:'12%',padding:10}} onPress={() => setModalVisible2(false)}>
                  <Fontisto color='white' size={15} name={'close-a'} style={{ alignSelf: 'center',alignItems:'center',justifyContent:'center'}} />
                </TouchableOpacity>
           <View style={styles.modal} >
           <Text style={{height:40,marginBottom:'2%',fontWeight:'bold',padding:5,justifyContent:'center',textAlign:'center',color:'white',backgroundColor:'#1E79C5',fontSize:19}}>Annuler mon RDV</Text>
           <Text style={{ fontSize: 18,marginLeft:10,marginTop:'15%' }}>Etes-vous sûr(e) de vouloir annuler ce rendez-vous ?</Text>
                  <TouchableOpacity style={{alignSelf:'flex-end',borderRadius:3,marginHorizontal:'3%',marginTop:'27%',marginBottom:2,width:60,height:30,backgroundColor:'#1E79C5'}} onPress={() =>  {setModalVisible2(false); rot()} }>
                    <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:16}}>Ok</Text>
                  </TouchableOpacity>
              </View>
          </Modal>
          <Modal isVisible={modalVisible3} animationType='slide' transparent={true} >
        <View style={styles.modal1} >
           <Text style={{height:40,marginBottom:'2%',fontWeight:'bold',padding:5,justifyContent:'center',textAlign:'center',color:'white',backgroundColor:'#1E79C5',fontSize:19}}>Ajouter un document</Text>
           <View style={{flexDirection:'row',alignItems:'center',marginTop:30,marginBottom:20}}>
           <Text style={{ fontSize: 17,marginLeft:10,fontWeight:'bold' }}>Document :</Text>
           <TouchableOpacity onPress={()=>_pickDocument()} style={{alignSelf:'flex-end',marginLeft:40,width:150,height:30,borderRadius:5,backgroundColor:'#1E79C5',justifyContent:'center'}}>
                <Text style={{color:'white',alignSelf:'center'}}>Choisir un document</Text>
            </TouchableOpacity>
            </View>
           <Text style={{ fontSize: 17,marginLeft:10,marginTop:10,fontWeight:'bold' }}>Catégorie</Text>
           <View style={styles.Picker}>
           <Picker
                    mode='dropdown'
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => { this.functionOne(itemValue, "speciality"); }}
                >
                    <Picker.Item label="Séléctionner une catégorie" value="0" />
                    <Picker.Item label="Ordonnance de médicament(s)" value="1" />
                    <Picker.Item label="Compte rendu" value="2" />
                    <Picker.Item label="Ordonnance d'analyse(s)" value="3" />
                    <Picker.Item label="Résultat d'analyse(s)" value="4" />
                    <Picker.Item label="Ordonnance d'examen(s)" value="5" />
                    <Picker.Item label="Résultat d'examen(s)" value="6" />
                    <Picker.Item label="Consigne" value="5" />
                    <Picker.Item label="Autre" value="5" />
                </Picker>
                </View>
                  <View style={{flexDirection:'row',alignSelf:'flex-end',marginVertical:40}}>
                  
                  <TouchableOpacity style={{borderRadius:3,marginHorizontal:5,marginTop:20,marginBottom:5,width:80,height:30,backgroundColor:'#FFC617',justifyContent:'center'}} onPress={() =>  {setModalVisible3(false);} }>
                    <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:15}}>Annuler</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderRadius:3,justifyContent:'center',marginHorizontal:5,marginTop:20,marginBottom:5,width:80,height:30,backgroundColor:'#1E79C5'}} onPress={() =>  {setModalVisible3(false);} }>
                    <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:15}}>Ajouter</Text>
                  </TouchableOpacity>
                  </View>
              </View>
          </Modal>

            <Modal
                    
                    isVisible={modalVisible}
                >
                    
                    <ScrollView contentContainerStyle={styles.centeredView}>
                    <View style={{ flexDirection: "row", alignItems:'center',justifyContent: 'space-between',flex:1,padding:10,height:50,backgroundColor:'#1E79C5',borderTopLeftRadius:5,borderTopRightRadius:5}}>
                                        <Text style={{fontSize:17,fontWeight:'bold',textAlign:'center',color:'white'}}>RDV avec {profess}</Text>
                                        <TouchableOpacity style={{ flex: 1, alignItems: "flex-end", height: 30, justifyContent: 'center' }} onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                        <Fontisto color='white' size={16} name={'close-a'} style={{ justifyContent: 'center' }} />
                    </TouchableOpacity>
                      </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginTop:12 }}>
                                        <Text style={[styles.title,{flex:3}]}>Type de RDV</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        {typeR==='C'&&
                                        <Text style={[styles.title1,{flex:4}]}>Cabinet</Text>}
                                        {typeR==='D'&&
                                        <Text style={[styles.title1,{flex:4}]}>Domicile</Text>}
                                        {typeR==='V'&&
                                        <Text style={[styles.title1,{flex:4}]}>Visio</Text>
                                        }
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5 }}>
                                        <Text style={[styles.title,{flex:3}]}>Statut</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{statut?statut:"Non renseigné"}</Text>
                                       
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Date</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{date_rdv?date_rdv:"Non renseigné"}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Durée (en h)</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{duree?duree:"Non renseigné"}</Text>
                        </View> 
                        {context!='medecin'&&
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Service</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{service?service:"Non renseigné"}</Text>
                        </View>
                        }
                        {context!='medecin'&&
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Responsable</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{responsable?responsable:"Non renseigné"}</Text>
                        </View>
                        }
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Professionnel</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{profess?profess:"Non renseigné"}</Text>
                        </View>
                        
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Spécialité</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{specialite?specialite:"Non renseigné"}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>N° Téléphone</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{tel? tel:"Non renseigné"}</Text>
                        </View>
                        {context!='medecin'&&
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Salle</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{salle?salle:"Non renseigné"}</Text>
                        </View>
                        }
                         <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Adresse</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{adress_rdv?adress_rdv:"Non renseigné"}</Text>
                        </View> 
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Complément d'adresse</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{adress_rdv2?adress_rdv2:"Non renseigné"}</Text>
                        </View> 
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Source</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{source?source:"Non renseigné"}</Text>
                        </View> 
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5}}>
                                        <Text style={[styles.title,{flex:3}]}>Date de création</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{create_rdv?create_rdv:"Non renseigné"}</Text>
                        </View>
                        
                
                       
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:5,marginBottom:15}}>
                                        <Text style={[styles.title,{flex:3}]}>Adressé par</Text>
                                        <Text style={[styles.title,{width:10}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{adresser_par?adresser_par:"Non renseigné"}</Text>
                        </View> 
                        
                        
                    </ScrollView>
                    
                        
                </Modal>
                {/* <Modal
                    isVisible={modalVisible4}
                    animationIn  = "slideInLeft"
                    animationOut = "slideOutLeft"
                    style        = {{margin: 0}}
                >
                    
                </Modal> *}
                {/* <TextInput onChangeText = {filterHandler} /> *}
            <Modal isVisible={modalVisible4}
                animationIn  = "slideInLeft"
                animationOut = "slideOutLeft"
                style        = {{margin: 0}}>
                <FilterRdv 
                    filterTextHandler   = {filterTextHandler}
                    resetFilter         = {resetFilter}
                    filterFields        = {filterDataHandler.filterFields}
                    filterHandlerAction = {filterHandler}
                    closeModal          = {closeModal}
                    specilictHint       = {specilictHint}
                    addressHint         = {addressHint}
                    professHint         = {professHint}
                />
            </Modal>
            <Segment style={{ justifyContent:'center',backgroundColor: '#1E79C5', height: 50 }}>
                <TouchableOpacity style={{alignSelf:'center',backgroundColor:'#1E79C5',height:30, padding: 5 ,alignItems: 'center',flexDirection:'row',borderWidth:1,borderColor:'white'}}  onPress={() => setModalVisible4(true)} >
                    <Fontisto color='white' size={16} name={'equalizer'}  />
                    <Text style={{color:'white',width:70,textAlign:'center'}}>Filtrer</Text>
                </TouchableOpacity>
            </Segment>
                
            {
                (filterDataHandler && filterDataHandler.filterData)
                    ?
                    <FlatList
                        data={filterDataHandler.filterData}
                        renderItem={({ item }) => 
                        {
                            item = item[0]
                            return(
                                <View style={styles.item}>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between'}}>
                                        <Text style={{flex:1,height:40,padding:10,marginBottom:'2%',fontWeight:'bold',textAlign:'center',color:'white',backgroundColor:'#1E79C5'}}>RDV avec  {item.profess}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:'1%'}}>
                                        <Text style={[styles.title,{flex:3}]}>Spécialité</Text>
                                        <Text style={[styles.title,{width:15}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{item.speciality}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <Text style={[styles.title,{flex:3}]}>Date du RDV</Text>
                                        <Text style={[styles.title,{width:15}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{item.date_rdv}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <Text style={[styles.title,{flex:3}]}>Statut</Text>
                                        <Text style={[styles.title,{width:15}]}>:</Text>
                                        {item.statut==='annule'&&
                                        <Text style={[styles.title1,{flex:4}]}>Annulé</Text>}
                                        {item.statut==='passé'&&
                                        <Text style={[styles.title1,{flex:4}]}>Passé</Text>
                                        }
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between',marginVertical:'2%' }}>
                                        <Text style={[styles.title,{flex:3}]}>Adressé par</Text>
                                        <Text style={[styles.title,{width:15}]}>:</Text>
                                        <Text style={[styles.title1,{flex:4}]}>{item.adresser_par}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <TouchableOpacity
                                            style={{ backgroundColor: '#FFC617', width: 90, borderRadius: 5,padding:5,marginHorizontal:15 }}
                                            onPress={() => {
                                                setModalVisible(true);
                                                setProfess(item.profess);
                                                setResponsable(item.responsable);
                                                setSpecialite(item.speciality);
                                                setTel(item.tel);
                                                setDaterdv(item.date_rdv);
                                                setStatut(item.statut);
                                                setService(item.service);
                                                setAdress(item.adress_rdv);
                                                setAdress2(item.adress2_rdv);
                                                setCreaterdv(item.create_rdv);
                                                setSalle(item.salle);
                                                setDuree(item.duree);
                                                setSource(item.source);
                                                setAdressP(item.adresser_par);
                                                setTypeR(item.type_rdv);
                                                setContext(item.context);
                                            }}
                                        >
                                            <Text style={styles.textStyle}>Détails</Text>
                                        </TouchableOpacity>
                                    
                                        <TouchableOpacity 
                                            style={{ backgroundColor: '#FFC617', width: 90,padding:5, borderRadius: 5,marginHorizontal:15 }} 
                                            onPress={() =>  setModalVisible1(true)
                                            /*ActionSheet.show(
                                            {
                                                options: BUTTONS,
                                                cancelButtonIndex: CANCEL_INDEX,
                                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                                //title: "Testing ActionSheet"
                                            },
                                            buttonIndex => {
                                                if (buttonIndex === 1) {
                                                    
                                                    Alert.alert(  
                                                        'Annuler',  
                                                        'Etes-vous sûr(e) de vouloir annuler ce RDV ?',  
                                                        [  
                                                            {  
                                                                text: 'Annuler',  
                                                                onPress: () => console.log('Cancel Pressed'),  
                                                                style: 'cancel',  
                                                            },  
                                                            {text: 'Oui', onPress:()=> rot()}]  
                                                    );  
                                                        
                                                    
                                                }
                                            }
                    
                                        )*}>
                                            <Text style={styles.textStyle}> Actions</Text>
                                        </TouchableOpacity>
                                </View>
                            </View>
                        )}}
                        keyExtractor={item => item[0].id.toString()}
                        extraData={Data}
                    />
                    :
                    displayLoading()
                    
            }

        </View>
            
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    modal: {
        marginTop:3,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '80%',
        height: '40%',
        borderRadius: 5,
        //borderWidth:1
      },
      modal1: {
        marginTop:3,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '95%',
        height: '60%',
        borderRadius: 5,
        //borderWidth:1
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
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft:15
    },
    title1: {
        fontSize: 15,
        marginHorizontal:15
    },
    title2: {
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf:"center",
        color:'#1E79C5',
        marginVertical:10
    },
    textStyle: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 14,
        fontWeight:"bold"
    },
    centeredView: {
        //flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        //marginBottom: 60,
        //marginTop:30,
        backgroundColor: 'white',
        borderRadius:5,
        marginBottom:1
    },
    Picker: {
        borderColor:'#3498db', borderWidth:1,
        height:40,justifyContent:'center',
        marginHorizontal:10,marginVertical:10,
        borderRadius:5,
        
    },
});

*/
