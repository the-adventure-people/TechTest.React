import React from "react";
import { render } from "@testing-library/react";
import Destination from "./Destinantion";

describe("Destination component", () => {
    it("Should render the card", () => {
        const mockData ={
            name: "Angkor Wat",
            image:
              "https://imgix.cosmicjs.com/06e2bcd0-d2e4-11e9-9ea8-2b9d842385af-the-adventure-people-destination-cambodia.jpg",
            country: "Cambodia",
            continent: "Asia",
        };
        const {baseElement} = render(<Destination destination={mockData} />);
        expect(baseElement).toMatchSnapshot();
    })
})