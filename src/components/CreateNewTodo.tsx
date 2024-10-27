import { Button, TextField } from '@mui/material'
import React, { ChangeEvent } from 'react'

type Props = {
    newTodoString: string,
    onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onAddBtnClick: () => void
}

export const CreateNewTodo = ({
    newTodoString,
    onNewTodoChange,
    onAddBtnClick
}: Props) => {
    return (
        <div>
            <TextField
                size="small"
                value={newTodoString}
                onChange={onNewTodoChange} />
            <Button
                variant="contained"
                onClick={onAddBtnClick}>
                Add
            </Button>
        </div>
    )
}
