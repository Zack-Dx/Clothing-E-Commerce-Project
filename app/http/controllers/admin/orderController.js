import { Order } from '../../../models/order.js';
function AdminOrderController() {
    return {
        async index(req, res) {
            try {
                const orders = await Order.find(
                    { status: { $ne: 'completed' } },
                    null,
                    { sort: { createdAt: -1 } }
                )
                    .populate('customerId', '-password, -cpassword')
                    .exec((err, orders) => {
                        res.render('admin/order.ejs');
                    });
            } catch (error) {
                console.log('error');
            }
        },
    };
}

export { AdminOrderController };
