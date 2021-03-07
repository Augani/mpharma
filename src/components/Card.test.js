import React from "react";
import {
  render,
  within,
  fireEvent,
  cleanup,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {Card} from "./Card";

let products = [
    {
        "id": 1,
        "name": "Exforge 10mg",
        "prices": [
            {
                "id": 1,
                "price": 10.99,
                "date": "2019-01-01T17:16:32+00:00"
            },
            {
                "id": 2,
                "price": 9.20,
                "date": "2018-11-01T17:16:32+00:00"
            }
        ]
    },
    {
        "id": 2,
        "name": "Exforge 20mg",
        "prices": [
            {
                "id": 3,
                "price": 12.00,
                "date": "2019-01-01T17:16:32+00:00"
            },
            {
                "id": 4,
                "price": 13.20,
                "date": "2018-11-01T17:16:32+00:00"
            }
        ]
    },
    {
        "id": 3,
        "name": "Paracetamol 20MG",
        "prices": [
            {
                "id": 5,
                "price": 5.00,
                "date": "2017-01-01T17:16:32+00:00"
            },
            {
                "id": 6,
                "price": 13.20,
                "date": "2018-11-01T17:16:32+00:00"
            }
        ]
    }
]

function j() {}

beforeEach(() => {});

afterEach(() => {
  cleanup();
});


describe("Product test", () => {
  it("Renders Product correctly", () => {
    render(<Card  key={products[0].id}
        title={products[0].name}
        price={products[0].prices}
        UpdatePrice={j}
        id={products[0].id} />);
    expect(screen.getByText(/Exforge 10mg/i)).toBeInTheDocument();
    expect(screen.getByText(/10.99/i)).toBeInTheDocument();
  });
});


