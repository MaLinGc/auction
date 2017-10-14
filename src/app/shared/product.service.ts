import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, '宏基電腦', 3600, 3.5, '这是第一商品,宏基電腦', ['电子产品', '硬件设备']),
    new Product(2, '联想電腦', 2786, 3, '这是第二商品,联想旗舰机', ['电子产品', '办公电脑']),
    new Product(3, '外星人電腦', 15446, 4, '这是第三商品,游戏本中的战斗机', ['电子产品', '游戏本']),
    new Product(4, '华硕笔记本', 5688, 3, '这是第四商品,滑索电脑，你值得拥有', ['电子产品', '硬件设备']),
    new Product(5, 'apple mac pro', 13599, 5, '这是第五商品', ['电子产品']),
    new Product(6, 'ipad mini', 3622, 4, '这是第六商品', ['电子产品', '便携设备'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-09-01 22:12:11', '张三', 3, '东西还行'),
    new Comment(2, 1, '2017-09-01 22:12:11', '李四', 4, '东西非常好'),
    new Comment(3, 1, '2017-09-01 22:33:11', '王五', 3.5, '东西一般般'),
    new Comment(4, 2, '2017-09-01 22:45:11', '王三', 2, '东西很差'),
    new Comment(5, 2, '2017-09-01 11:12:11', '郝红', 4, '东西还可以')
  ];

  constructor() {
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product: Product) => product.id == id);
  }

  getCommentsByProduct(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }

  getAllCategories() {
    return ['电子产品', '硬件设备', '办公电脑', '游戏本', '便携设备'];
  }
}

export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}

export class Comment {

  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {

  }
}
