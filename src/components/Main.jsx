import React, { useState } from "react";
import axios from "axios"
import Card from "./Card";
import image from '../assets/bg2.png';
export default function Main(){
    const[search,setSearch]=useState('');
    const[bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==='Enter'){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
        <div className="header">
            <div className="row1">
                <h1>A room without books is like <br />Abody without soul</h1>
            </div>
            <div className="row2">
                <h2>Find your book</h2>
                <div className="search">
                    <input type="text" placeholder="enter your book name" value={search}  onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
                    <button><i className='bx bx-search'></i></button>
                </div>
                <img src={image} alt="" />
            </div>
        </div>
        <div className="container">
            {
                <Card book={bookData}/>
            }
        </div>
        </>
    );
}