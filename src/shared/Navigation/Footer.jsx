import React, { useContext } from "react";
import { NavLink, useRouteLoaderData } from "react-router-dom";

import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";

import CartContext from "../../context/CartContext";

export default function Footer() {
  const { items } = useContext(CartContext);

  const token = useRouteLoaderData("root");

  return (
    <>
      <div className="h-16" /> {/* Spacer to prevent content overlap */}
      <footer className="w-full h-16 bg-gray-900 fixed bottom-0 left-0 right-0 shadow-lg z-50">
        <div className="max-w-screen-xl mx-auto h-full flex justify-evenly items-center">
          <NavLink
            to="products"
            className={({ isActive }) =>
              `flex flex-col items-center px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-luxury-gold text-white ${
                isActive
                  ? "bg-luxury-gold text-gray-900"
                  : "text-white hover:bg-luxury-gold hover:text-gray-900"
              }`
            }
            end
          >
            <MdOutlineShoppingBag className="h-6 w-6 mb-1" />
            <span className="text-sm">Shop</span>
          </NavLink>

          <NavLink
            to="products/cart"
            className={({ isActive }) =>
              `relative flex flex-col items-center px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-luxury-gold text-white hover:text-gray-900 ${
                isActive
                  ? "bg-luxury-gold text-gray-900"
                  : "text-white hover:bg-luxury-gold hover:text-gray-900"
              }`
            }
            end
          >
            <div className="relative">
              <MdOutlineShoppingCart className="h-6 w-6 mb-1" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </div>
            <span className="text-sm">Cart</span>
          </NavLink>

          {token && (
            <NavLink
              to="orders"
              className={({ isActive }) =>
                `flex flex-col items-center px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-luxury-gold text-white hover:text-gray-900 ${
                  isActive
                    ? "bg-luxury-gold text-gray-900"
                    : "text-white hover:bg-luxury-gold hover:text-gray-900"
                }`
              }
              end
            >
              <FaRegUserCircle className="h-6 w-6 mb-1" />
              <span className="text-sm">Orders</span>
            </NavLink>
          )}

          {!token && (
            <NavLink
              to="signup"
              className={({ isActive }) =>
                `flex flex-col items-center px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-luxury-gold text-white hover:text-gray-900 ${
                  isActive
                    ? "bg-luxury-gold text-gray-900"
                    : "text-white hover:bg-luxury-gold hover:text-gray-900"
                }`
              }
              end
            >
              <SiGnuprivacyguard className="h-6 w-6 mb-1" />
              <span className="text-sm">Signup</span>
            </NavLink>
          )}
        </div>
      </footer>
    </>
  );
}
