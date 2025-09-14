
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create an object of type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row and store ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with age
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);