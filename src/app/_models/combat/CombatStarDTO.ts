import { Hero } from '../Personnage/Hero/Hero';
import { Monstre } from '../Personnage/Monstre/monstre';

export interface CombatStarDTO{
    joueurs: Hero[];
    monstre: Monstre[];
    TypeDonjon: string;
    lvlDonjon:number;
    ordre: number[];
}