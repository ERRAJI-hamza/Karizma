import React from 'react'
import { Header } from './Header';
import { Table } from './Table';

export const Home = () => {
  return (
    <>
    <div className='header'>
        <Header/>
    </div>
    <div className='table'>
       <Table/>
    </div>
    </>
  )
}
