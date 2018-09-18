function sortHero(hero1, hero2) {
    if(hero1.power > hero2.power) {
        return 1;
    } else if(hero1.power < hero2.power) {
        return -1
    } else {
        return 0;
    }
}