let value = ''
export default {
    getValue: () => value,
    setValue: (v:any) => {
        console.log('value: ', v);
        value = v;
    }

}
