const alunos = [
    {nome: "Michel", nota: 10},
    {nome: "Rafael", nota: 8},
    {nome: "Lucas", nota: 5},
    {nome: "Leticia", nota: 7},
    {nome: "Mirela", nota: 6},
    {nome: "Roberto", nota: 3},
    {nome: "Jessica", nota: 7},
    {nome: "João", nota: 2}
]

const media6 = alunos.filter(function (item) {
    return item.nota >= 6;
})

console.log(media6);