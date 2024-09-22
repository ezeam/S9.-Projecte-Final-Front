import { Request, Response } from 'express';
import Marker from '../models/marker';

// Obtener todos los marcadores de la base de datos
export const getMarkers = async (req: Request, res: Response): Promise<void> => {
  try {
    const markers = await Marker.findAll();
    res.json(markers);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los marcadores' });
  }
};

// Añadir un nuevo marcador
export const addMarker = async (req: Request, res: Response): Promise<void> => {
  const { lat, lng, description } = req.body;

  try {
    const newMarker = await Marker.create({ lat, lng, description });
    res.json(newMarker);
  } catch (err) {
    res.status(500).json({ error: 'Error al añadir el marcador' });
  }
};
