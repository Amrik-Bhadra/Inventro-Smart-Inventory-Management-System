import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Html5QrcodeScanner } from "html5-qrcode";

const products = [
  { id: "P001", category: "Pharmaceuticals", subCategory: "OTC Drugs" },
  {
    id: "P002",
    category: "Pharmaceuticals",
    subCategory: "Prescription Drugs",
  },
  { id: "P006", category: "PPE", subCategory: "Gloves" },
  { id: "P007", category: "PPE", subCategory: "Masks" },
  { id: "P008", category: "Medical Devices", subCategory: "Diagnostic Tools" },
  { id: "P011", category: "Consumables", subCategory: "Bandages" },
  { id: "P015", category: "Health and Wellness", subCategory: "Vitamins" },
  { id: "P018", category: "Emergency Supplies", subCategory: "First-Aid" },
];

const categories = [...new Set(products.map((p) => p.category))];

const AddNewProductForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    product_name: "",
    category: "",
    subcategory: "",
    product_price: "",
    product_qty: "",
    product_location: "",
    threshold_amount: 50,
  });

  const [scannedResult, setScannedResult] = useState("");

  useEffect(() => {
    // Initialize the QR code scanner
    const scanner = new Html5QrcodeScanner("qr-code-scanner", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(
      (result) => {
        setScannedResult(result);
        scanner.clear();
      },
      (error) => {
        console.warn(error);
      }
    );

    // Cleanup function to stop the scanner when the component unmounts
    return () => {
      scanner.clear();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData({ ...formData, category: selectedCategory, subcategory: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...formData,
        product_price: parseFloat(formData.product_price), // Convert to Float
        product_qty: parseInt(formData.product_qty), // Convert to Int
        threshold_amount: parseInt(formData.threshold_amount), // Convert to Int
      };

      const response = await axios.post(
        "http://localhost:8000/api/products/create",
        formattedData
      );

      alert("Product added successfully");
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  const filteredSubcategories = formData.category
    ? [
        ...new Set(
          products
            .filter((p) => p.category === formData.category)
            .map((p) => p.subCategory)
        ),
      ]
    : [];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[600px] max-w-xl">
        <h2 className="text-2xl font-medium mb-8 text-left">Add New Product</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleCategoryChange}
              required
              className="w-full border px-3 py-2 rounded-md"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">
              Sub Category
            </label>
            <select
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              required
              disabled={!formData.category}
              className="w-full border px-3 py-2 rounded-md"
            >
              <option value="">Select Subcategory</option>
              {filteredSubcategories.map((subCategory) => (
                <option key={subCategory} value={subCategory}>
                  {subCategory}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">
              Unit Price (Rs.)
            </label>
            <input
              type="number"
              name="product_price"
              value={formData.product_price}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <input
              type="number"
              name="product_qty"
              value={formData.product_qty}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              name="product_location"
              value={formData.product_location}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">
              Scanned Result
            </label>
            <input
              type="text"
              value={scannedResult}
              readOnly
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-2">
            <div
              id="qr-code-scanner"
              className="w-full h-64 border rounded-md"
            ></div>
          </div>

          <div className="col-span-2 flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-md"
            >
              Discard
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddNewProductForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddNewProductForm;