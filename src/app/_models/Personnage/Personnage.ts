import { Capacite } from '../capacite';

export interface Personnage {

    id: number;
    nomPersonnage: string;
    pointDeVie: number;
    pointDeMana: number;
    pointDeForce: number;
    pointDeIntelligence: number;
    pointDeAgilite: number;
    pointDeCharisme: number;
    pointDeResistancePhysique: number;
    pointDeResistanceMagique: number;
    pointDeVieMax: number;
    pointDeManaMax: number;
    etat: string
    vie: Boolean
    niveau: number
    corpsAventurier: string
    capacites: Capacite[];

}