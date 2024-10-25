const request = require("supertest");
const express = require("express");
const app = require("../sprint-2/server"); // Adjust the path to your server.js file

// Mock the MySQL connection and db methods
const mysql = require("mysql");
jest.mock("mysql");

// Sample test data
const testTeacher = {
  ID: 1,
  Username: "teacher123",
  Password: "password123",
  Option: "Teacher",
};

// Test for Teacher registration
describe("POST /Register - Teacher Registration", () => {
  beforeAll(() => {
    // Mock database query responses
    mysql.createConnection.mockReturnValue({
      query: jest.fn((sql, values, callback) => {
        if (sql.startsWith("INSERT INTO teachers")) {
          callback(null); // simulate success on INSERT
        }
      }),
      end: jest.fn(),
    });
  });

  it("should register a new teacher", async () => {
    const response = await request(app).post("/Register").send(testTeacher);

    // Check for a successful registration response
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ registered: true });
  });
});
