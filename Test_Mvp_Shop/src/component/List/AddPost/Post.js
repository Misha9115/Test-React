import React from 'react'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './../List.css'
export default function Post(props) {

    return (
        <form onSubmit={props.handelFS}>
            <div>
            <TextField name="name" label="Name"value={props.name} onChange={props.chenge} color="primary" />
            </div>
            <div>
            <TextField name="desc" label="Desc"value={props.desc} onChange={props.chenge} color="primary" />
            </div>
            <div className='add'>
            <TextField className='add' name="cost" label="Cost"value={props.cost} onChange={props.chenge} color="primary" />
            </div>
            <Button type="submit" variant="contained" color="primary">
                Добавить
          </Button>
        </form>
    )
}