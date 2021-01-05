import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './List.css';
export default function ListS(props) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h3 >{props.name}</h3>
            </Grid>
            <Grid item xs={6}>
                <img src={props.img} className="photo" alt="Apple"/>
            </Grid>
            <Grid item xs={6}>
                <div className='text'>{props.descrip}</div>
            </Grid>

            <Grid item xs={6}>
                {props.flag ?

                    <Button variant="contained" color="secondary" onClick={() => { props.del(props.id) }}>
                        Удалить
          </Button>
                    :
                    <Button variant="contained" color="primary" >
                        Купить
            </Button>
                }
            </Grid>

            <Grid item xs={6}>
                <div className="paper">Цена :{props.cost}</div>
            </Grid>
        </Grid>)
}