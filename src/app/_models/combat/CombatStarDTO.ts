import { Hero } from '../Personnage/Hero/Hero';
import { Monstre } from '../Personnage/Monstre/monstre';
import { Consommable } from '../Comsommable';

export interface CombatStarDTO{

    monstreattaquant:Monstre;
    heroesattaquant:Hero;

    joueurs: Hero[];
    monstre: Monstre[];

    TypeDonjon: string;
    lvlDonjon:number;
    ordre: number[];

    choix: number;
    cap: number;
    consommable: Consommable;
    cible:number[]; 
}