import { Personnage } from '../Personnage/Personnage';
import { Consommable } from '../Comsommable';
import { Hero } from '../Personnage/Hero/Hero';
import { Monstre } from '../Personnage/Monstre/monstre';

export interface CombatTourDTO{
    monstreattaquant:Monstre;
    heroesattaquant:Hero;
    monstreSetdefenseur:Monstre[];
    heroesSetdefenseur:Hero[];
    choix: number;
    cap: number;
    conso: Consommable;  
}
