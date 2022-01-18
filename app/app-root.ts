

let tab;

export function tabLoaded(evt) {
    tab = evt.object;
}


export function changeTab() {
    tab.selectedIndex = 1;
}