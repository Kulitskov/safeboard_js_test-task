import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const UserFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.queue}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'FullName', name: 'по ФИО'},
                    {value: 'mail', name: 'по почте'},
                    {value: 'groop', name: 'по должности'},
                    {value: 'number', name: 'по номеру телефона'},
                ]}
            />
        </div>
    );
};

export default UserFilter;