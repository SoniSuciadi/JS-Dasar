const selectKubus = document.querySelector('.select-kubus')
const selectObject = document.querySelector('.select-object')
const selectColor = document.querySelector('.select-color')

const btnEdit = document.querySelector('.btn-edit')
btnEdit.addEventListener('click', () => {
    if (selectObject.value == 'background-color') {
        document.querySelector(`.${selectKubus.value}`).style.backgroundColor = selectColor.value
    } else {
        document.querySelector(`.${selectKubus.value}`).style.borderColor = selectColor.value
    }

    // document.querySelector(`.${selectKubus.value}`).setAttribute("style", `${selectObject.value}:${selectColor.value};`);
})