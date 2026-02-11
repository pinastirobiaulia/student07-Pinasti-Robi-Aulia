import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TambahProduct = () => {
    const [ProductList, setProductList] = useState([]);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const [form, setForm] = useState({
        product_name : "",
        supplier_id : "",
        category_id : "",
        unit_price : "",
        units_in_stock : "",
        discontinued : "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/product");
                setProductList(res.data);
            } catch (err) {
                console.error("Gagal mengambil data products:", err);
            }
        };
        fetchProduct();
    }, []);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:5000/api/api/products",
            );
            console.log("Respon dari server:", res.data);
            setShowSuccessModal(true);
        } catch (error) {
            const message = error.response?.data?.message || "Gagal menambahkan product";
            setErrorMessage(message);
            setShowErrorModal(true);
            console.error("Gagal menambahkan product:", message);
        }
        // }
    };
    
    return (
        <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Tambah Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="product_name"
                    name="product_name"
                    placeholder="Product Name"
                    value={form.product_name}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                />

                <select
                    name="SupplierId"
                    value={form.SupplierId}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                >
                    <option value="">-- Pilih Supplier --</option>
                    {ProductList.map((p) => (
                        <option key={p.id} value={p.id}>
                            {p.company_name}
                        </option>
                    ))}
                </select>

                <select
                    name="CategoryId"
                    value={form.CategoryId}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                >
                    <option value="">-- Pilih Category --</option>
                    {ProductList.map((p) => (
                        <option key={p.id} value={p.id}>
                            {p.company_name}
                        </option>
                    ))}
                </select>

                 <select
                    name="CategoryId"
                    value={form.CategoryId}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                >
                    <option value="">-- Pilih Category --</option>
                    {ProductList.map((p) => (
                        <option key={p.id} value={p.id}>
                            {p.company_name}
                        </option>
                    ))}
                </select>

                <input
                    type="quantity_per_unit"
                    name="quantity_per_unit"
                    placeholder="Quantity Per Unit"
                    value={form.quantity_per_unit}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                />

                <input
                    type="unit_price"
                    name="unit_price"
                    placeholder="Unit price"
                    value={form.unit_price}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                />

                <input
                    type="units_in_stock"
                    name="units_in_stock"
                    placeholder="Unit Stock"
                    value={form.units_in_stock}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                />  

                <input
                    type="units_in_stock"
                    name="units_in_stock"
                    placeholder="Unit Stock"
                    value={form.units_in_stock}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                />  

                <input
                    type="units_on_order"
                    name="units_on_order"
                    placeholder="Unit Order"
                    value={form.units_on_order}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                />  

                <input
                    type="reorder_level"
                    name="reorder_level"
                    placeholder="Reorder Level"
                    value={form.reorder_level}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                />

                <input
                    type="discontinued"
                    name="discontinued"
                    placeholder="Discontinued"
                    value={form.discontinued}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                />    

                {formErrors.ProductId && <p className="text-red-600 text-sm">{formErrors.ProductId}</p>}
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Simpan
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/kelolapengguna")}
                        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                    >
                        Batal
                    </button>
                </div>

                {showErrorModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                            <h2 className="text-lg font-semibold mb-4 text-red-700">Gagal Menambahkan</h2>
                            <p className="mb-4">{errorMessage}</p>
                            <button
                                onClick={() => setShowErrorModal(false)}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )}

                {showSuccessModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                            <h2 className="text-lg font-semibold mb-4 text-green-700">Berhasil Ditambahkan</h2>
                            <p className="mb-4">Product baru berhasil disimpan ke sistem.</p>
                            <button
                                onClick={() => {
                                    setShowSuccessModal(false);
                                    navigate("/kelolaproduct");
                                }}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )}

            </form>
        </div>
    );
};

export default TambahProduct; 