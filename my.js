var bsjs = new BSJS('bsjs')
var MyModal = new bsjs.modal({
    title: 'My First Modal'
    , addTo: bsjs.body
})
var navBar = new bsjs.nav.bar({
    addTo: bsjs.body
    , title: 'My Nav'
})
var dropDownGroup = new bsjs.nav.dropDownGroup({
    addTo: navBar.left
    , title: 'My dropdown group'
})
var dropDownItemOne = new bsjs.nav.dropDownItem({
    addTo: dropDownGroup.body
    , title: 'My drop down item'
    , onClick: MyModal.show
})
var button = new bsjs.button({
    title: 'My Button'
    , addTo: MyModal.body
    , onClick: function () {
        alert("It is me!")
    }
})
var panel = new bsjs.panel({
    title: 'My Panel'
    , addTo: bsjs.body
})
panel.body.add(button)