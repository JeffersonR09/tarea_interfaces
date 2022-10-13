import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ListItem from './ListItem'

export default function Comentarios() {
    const comment  = [
        {
            nombre: 'David Green',
            fecha: '20 Apr. 2021',
            comentario:'😃😇 Polygon has raised $450 million from strategic investors rading to a press release sent to Bitcoin.com News on February 7.'
        },
        {
            nombre: 'Michel Ganri',
            fecha: '20 Apr. 2021',
            comentario:'During the weekend, when bitcoin rose to a two- week high, it was Gala stole the show ...'
        },
        {
            nombre: 'Kim Dranco',
            fecha: '20 Apr. 2021',
            comentario:'During the weekend, when bitcoin rose to a two-week high, it was Gala stole the show ...'
        },
        {
            nombre: 'Scot Donavan',
            fecha: '20 Apr. 2021',
            comentario:'During the weekend, when bitcoin rose to a two- week high, it was Gala stole the show ...'
        },
        {
            nombre: 'David Green',
            fecha: '20 Apr. 2021',
            comentario:'😃😇 Polygon has raised $450 million from strategic investors rading to a press release sent to Bitcoin.com News on February 7.'
        },
        {
            nombre: 'Michel Ganri',
            fecha: '20 Apr. 2021',
            comentario:'During the weekend, when bitcoin rose to a two- week high, it was Gala stole the show ...'
        },
    ]
  return (
    <FlatList 
    data = {comment}
    keyExtractor = {(item) => item.comentario}
    renderItem = {({item, index}) => <ListItem item = {item}/>}
    

    />
  )
}

const styles = StyleSheet.create({

})