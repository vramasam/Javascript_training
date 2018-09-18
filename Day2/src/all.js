var heroObj = [{ title: "superman", "power": 10 },
    { title: "batman", "power": 5 },
    { title: "spiderman", "power": 4 },
    { title: "Ironman", "power": 8 },
    { title: "normal", "power": 1 }];
function sortHero(hero1, hero2) {
    if (hero1.power > hero2.power) {
        return 1;
    }
    else if (hero1.power < hero2.power) {
        return -1;
    }
    else {
        return 0;
    }
}
console.log(heroObj.sort(sortHero));
