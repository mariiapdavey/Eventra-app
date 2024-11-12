import asyncHandler from "express-async-handler"
import Order from '../models/orderModel.js'

const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body

    if (orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('No order items')
    } else {
        const order = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})

const getOrderById = asyncHandler(async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('user','name email')

    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
        }
    } catch (error) {
    console.error("Error retrieving order:", error.message)
    res.status(500).json({message: "Failed to retrieve order."})
    }
})

const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (order){
        order.isPaid = true
        order.paidAt = Date.now() //fixed typo from pait to paid
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.email_address
        }

        const updateOrder = await order.save()
        res.json(updateOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

const getMyOrders = asyncHandler(async (req, res) => {
    try {
    const orders = await Order.find({ 
        user: req.user._id})
        res.json(orders)
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch orders'
        })
    }
})

export {addOrderItems, getOrderById, updateOrderToPaid, getMyOrders}