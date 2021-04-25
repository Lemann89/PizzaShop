import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../product/product.entity';
import { OrderEntity } from './order.entity';

@Entity('order_product')
export class OrderProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => ProductEntity, (product) => product.orderProduct)
  product: ProductEntity;

  @ManyToOne(() => OrderEntity, (order) => order.orderProduct)
  order: OrderEntity;
}
