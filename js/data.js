const CATEGORIES = [
 {
  "id": "am-chen",
  "name": "Ấm chén"
 },
 {
  "id": "bat-dia",
  "name": "Bát đĩa"
 },
 {
  "id": "do-tho",
  "name": "Đồ thờ, bát hương"
 },
 {
  "id": "loc-binh",
  "name": "Lộc bình, phong thuỷ"
 },
 {
  "id": "lo-hoa",
  "name": "Lọ hoa"
 },
 {
  "id": "tuong",
  "name": "Tượng gốm sứ"
 },
 {
  "id": "gia-dung",
  "name": "Gốm sứ gia dụng"
 }
];
const PRODUCTS = [
 {
  "id": 1,
  "cat": "am-chen",
  "name": "Ấm trà tử sa nguyên khoáng dáng Lê Hồ (Khoáng Lão)",
  "brand": "Hương Vân Cát",
  "price": 120000000,
  "desc": "Ấm trà đất nung (tử sa) \"Hương Vân Cát\" sở hữu dáng bầu tròn cổ điển với tone màu cam đất trầm ấm, đường nét vòi và quai uốn lượn tinh tế. Sản phẩm được đặt trang trọng trên đế gỗ lũa mộc mạc, đậm chất trà đạo truyền thống, rất thích hợp cho những ai yêu thích thưởng trà chuyên nghiệp hoặc dùng làm quà tặng cao cấp.",
  "img": "1.webp",
  "status": "Còn hàng"
 },
 {
  "id": 2,
  "cat": "am-chen",
  "name": "Ấm tử sa Lục Phương thanh khôi nê vẽ Rồng kèm 2 chén cao cấp",
  "brand": "Hương Vân Cát",
  "price": 95000000,
  "desc": "Ấm trà gốm tử sa bát giác độc đáo này nổi bật với tông màu nâu vàng hạt mịn và kiểu dáng góc cạnh mạnh mẽ. Trên thân ấm được trang trí tỉ mỉ bằng hình vẽ một con rồng vàng uốn lượn sống động giữa những đám mây trắng bay bổng, cùng mặt trăng vàng và các chi tiết sóng đỏ. Được đặt trên một chiếc đế dệt tự nhiên và bệ đỏ đậm trên nền đen tuyền, ấm trà còn có một con dấu thương hiệu đỏ 'Vân Cát' tinh tế phía trên.",
  "img": "2.webp",
  "status": "Còn hàng"
 },
 {
  "id": 3,
  "cat": "am-chen",
  "name": "Bộ ấm chén dáng Nhật - bọc đồng",
  "brand": "Gốm Thành Thuỷ",
  "price": 850000,
  "desc": "Bộ ấm chén trà gốm sứ Bát Tràng men rạn cao cấp với 1 ấm và 6 chén đĩa lót, được vẽ cảnh sơn thủy hữu tình bằng mực đen. Sản phẩm nổi bật với các chi tiết mạ vàng óng ánh trên viền miệng, quai, vòi ấm và viền đĩa lót, tạo nên vẻ sang trọng.",
  "img": "3.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 4,
  "cat": "am-chen",
  "name": "Bộ ấm chén men rạn cổ Trúc lâm thất hiền",
  "brand": "Gốm Thành Thuỷ",
  "price": 620000,
  "desc": "Bộ ấm chén trà gốm sứ men rạn giả cổ với tông màu ngà hoài niệm, gồm một ấm trà quai kim loại và các chén trà kèm đĩa lót chỉn chu. Trên thân ấm và các chén được vẽ thủ công họa tiết sơn thủy, hiền sĩ đàm đạo màu lam mờ tinh tế, mang đậm phong cách truyền thống. Trọn bộ sản phẩm được đặt trên chiếc khay gỗ chạm khắc hoa văn tinh xảo, rất phù hợp cho không gian trà đạo sang trọng hoặc làm quà tặng cao cấp.",
  "img": "4.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 5,
  "cat": "am-chen",
  "name": "Bộ ấm chén Bát Tràng men hoả biến dáng trống màu xanh",
  "brand": "Bát Tràng",
  "price": 950000,
  "desc": "Bộ ấm chén trà gốm sứ men hỏa biến sắc xanh lam kết hợp viền nâu ấm áp, nổi bật với hiệu ứng đốm sáng bóng độc đáo như dải ngân hà. Trọn bộ bao gồm một ấm trà dáng tròn mập cùng sáu chén trà kèm đĩa lót được sắp xếp cân đối, tinh tế. Sản phẩm mang phong cách hiện đại pha lẫn nét sang trọng, rất phù hợp để thưởng trà hàng ngày hoặc làm quà tặng tân gia, đối tác.",
  "img": "5.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 6,
  "cat": "bat-dia",
  "name": "Bộ bát đĩa Bát Tràng bèo xanh ngọc",
  "brand": "Gốm Thành Thuỷ",
  "price": 4150000,
  "desc": "Bộ bát đĩa gốm sứ cao cấp với tone màu xanh rêu - trắng chủ đạo, nổi bật nhờ họa tiết hoa văn nhỏ phủ đều tỉ mỉ trên bề mặt. Trọn bộ bao gồm đa dạng các loại đĩa hình lá, đĩa tròn, đĩa bầu dục, bát ăn cơm, tô canh có nắp, thìa và đĩa chấm tiện lợi. Thiết kế kết hợp giữa vẻ đẹp truyền thống và tính ứng dụng cao, giúp tôn lên sự sang trọng và ấm cúng cho bữa ăn gia đình.",
  "img": "6.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 7,
  "cat": "bat-dia",
  "name": "Bộ bát đĩa hoa mặt trời vẽ sen chuồn",
  "brand": "Bát Tràng",
  "price": 2340000,
  "desc": "Bộ bát đĩa gốm sứ trang nhã với sắc sứ trắng sáng, nổi bật nhờ họa tiết hoa sen và chuồn chuồn màu xanh lam vẽ tay tinh tế. Bộ sản phẩm gồm bát canh trung tâm kết hợp cùng 6 đĩa hình cánh hoa xếp thành bông hoa lớn, đi kèm bát ăn cơm, tô lớn và đĩa chấm đồng bộ. Thiết kế độc đáo và thuần Việt này rất thích hợp cho các bữa cỗ gia đình, ngày lễ Tết hoặc dùng làm quà tặng tân gia đầy ý nghĩa",
  "img": "7.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 8,
  "cat": "bat-dia",
  "name": "Bộ bát đĩa Bát Tràng 11 món cao cấp vẽ đào hồng",
  "brand": "Bát Tràng",
  "price": 590000,
  "desc": "Bộ bát đĩa gốm sứ cao cấp Bát Tràng mang gam màu trắng kem trang nhã, nổi bật với họa tiết hoa đào hồng vẽ tay tinh tế trên nền xoáy gân độc đáo. Trọn bộ sản phẩm gồm bát ăn cơm, tô canh lớn, đĩa tròn, đĩa chấm và chén chấm đồng bộ, đi kèm hộp đựng quà tặng màu đỏ sang trọng có quai xách. Thiết kế vừa mang đậm nét truyền thống vừa ấm cúng, rất thích hợp sử dụng trong các bữa ăn gia đình hoặc làm quà biếu, quà tặng tân gia ý nghĩa.",
  "img": "8.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 9,
  "cat": "bat-dia",
  "name": "Bộ bát đĩa quà tặng Bát Tràng cao cấp vẽ tay ngò gai",
  "brand": "Bát Tràng",
  "price": 690000,
  "desc": "Bộ bát đĩa gốm sứ cao cấp Bát Tràng sở hữu sắc sứ trắng kem trang nhã, nổi bật với họa tiết chiếc lá xanh mộc mạc vẽ tay trên nền vân xoáy và gân múi tinh tế. Bộ sản phẩm gồm đa dạng vật dụng như bát ăn cơm, tô canh lớn, đĩa tròn, đĩa bầu dục uốn lượn cùng đĩa chấm đồng bộ, đi kèm hộp quà tặng màu vàng đỏ rực rỡ sang trọng. Thiết kế gần gũi, ấm cúng và đầy tinh tế này rất thích hợp cho mâm cơm gia đình hằng ngày hoặc làm quà biếu, quà tặng tân gia ý nghĩa.",
  "img": "9.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 10,
  "cat": "bat-dia",
  "name": "Bộ bát đĩa Bát Tràng men kem vẽ hoa Đào xanh",
  "brand": "Bát Tràng",
  "price": 1100000,
  "desc": "Bộ bát đĩa gốm sứ cao cấp Bát Tràng sở hữu sắc sứ trắng kem thanh lịch, điểm xuyết họa tiết hoa mai xanh nhẹ nhàng và tinh tế trên nền xoáy gân hiện đại. Trọn bộ sản phẩm gồm đầy đủ bát ăn cơm, tô canh, đĩa hình lá, đĩa vuông, đĩa bầu dục uốn lượn và các chén chấm nhỏ xinh với đường viền nâu nổi bật. Thiết kế trang nhã và tiện dụng này rất thích hợp để làm đẹp cho mâm cơm gia đình hằng ngày hoặc làm quà tặng tân gia, lễ Tết đầy ý nghĩa.",
  "img": "10.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 11,
  "cat": "do-tho",
  "name": "Bộ đồ thờ Bát Tràng men rạn nổi rồng Phúc Quý",
  "brand": "Gốm Trường An",
  "price": 1300000,
  "desc": "Bộ đồ thờ gốm sứ men rạn giả cổ Bát Tràng được chế tác vô cùng tinh xảo, nổi bật với các họa tiết rồng phượng đắp nổi mang sắc xanh lam và vàng đồng tôn nghiêm. Bộ sản phẩm trọn gói bao gồm bát hương trung tâm, mâm bồng, đôi lọ hoa, nậm rượu, đèn dầu, chóe thờ, chân nến cùng kỷ ngai 3 chén được bố trí cân đối và chỉn chu. Thiết kế đậm nét tâm linh truyền thống này rất phù hợp để trang trí không gian thờ cúng gia tiên thêm phần trang trọng, uy nghi và ấm cúng.",
  "img": "11.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 12,
  "cat": "do-tho",
  "name": "Bộ đồ thờ Bát Tràng men lam",
  "brand": "Gốm Trường An",
  "price": 9910000,
  "desc": "Bộ đồ thờ gốm sứ Bát Tràng tráng men trắng xanh truyền thống được vẽ tay tỉ mỉ với các họa tiết hoa sen, rồng phượng vô cùng tinh xảo và thuần Việt. Trọn bộ sản phẩm được bày trí đầy đủ, trang nghiêm gồm ba bát hương, mâm bồng, đôi lọ hoa lớn nhỏ, chóe thờ, kỷ chén, đèn dầu và các vật phẩm thờ cúng đồng bộ. Sự kết hợp giữa sắc men lam cổ điển cùng phong thái bài trí ấm cúng giúp không gian thờ cúng gia tiên thêm phần thanh tịnh, uy nghi và trang trọng.",
  "img": "12.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 13,
  "cat": "do-tho",
  "name": "Bộ đồ thờ Bát Tràng Trường Xuân men rạn đắp nổi hoa sen thờ Phật",
  "brand": "Gốm Trường An",
  "price": 2600000,
  "desc": "Bộ đồ thờ gốm sứ men rạn giả cổ Bát Tràng được chế tác vô cùng tinh xảo, nổi bật với họa tiết hoa sen đắp nổi mang sắc vàng hoàng gia và xanh lam trang nhã. Trọn bộ sản phẩm được bày trí đầy đủ, cân đối gồm bát hương, mâm bồng, lọ hoa, ống hương, chóe thờ, bát sâm, chân nến cùng kỷ ngai 3 chén đồng bộ. Sự kết hợp giữa chất men rạn cổ kính và sắc hoa sen thanh cao giúp không gian thờ cúng gia tiên thêm phần trang trọng, uy nghi và ấm cúng.",
  "img": "13.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 14,
  "cat": "do-tho",
  "name": "Bát hương men rạn nổi rồng cao cấp Trường Xuân đế sứ",
  "brand": "Gốm Trường An",
  "price": 520000,
  "desc": "Bát hương gốm sứ men rạn giả cổ Bát Tràng được đắp nổi hoa văn \"Lưỡng long chầu nguyệt\" vô cùng tinh xảo và sống động. Sản phẩm sử dụng sự kết hợp sắc màu truyền thống giữa xanh lam thanh lịch và vàng đồng uy nghi, đi kèm chân đế chắc chắn mang họa tiết mặt hổ sương sắc nét. Thiết kế đậm nét phong thủy và tâm linh Việt Nam này là vật phẩm không thể thiếu, mang lại vẻ trang trọng, linh thiêng cho bàn thờ gia tiên.",
  "img": "14.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 15,
  "cat": "do-tho",
  "name": "Bát hương vẽ vàng Hoa Sen men lam Vạn Phúc",
  "brand": "Gốm Trường An",
  "price": 1300000,
  "desc": "Bát hương gốm sứ Bát Tràng tráng men trắng xanh cao cấp, nổi bật với họa tiết hoa sen vẽ tay sắc nét kết hợp đường dát vàng 24k vô cùng lộng lẫy. Sự giao thoa giữa gam màu xanh lam truyền thống và ánh vàng kim sang trọng tạo nên vẻ đẹp thuần khiết, tinh xảo và vô cùng đẳng cấp. Sản phẩm là vật phẩm thờ cúng linh thiêng, giúp tôn lên sự trang nghiêm, uy nghi cho không gian bàn thờ gia tiên của gia đình.",
  "img": "15.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 16,
  "cat": "loc-binh",
  "name": "Lọ lộc bình Bát Tràng men lam Tứ",
  "brand": "Gốm Trường An",
  "price": 6800000,
  "desc": "Đôi lộc bình gốm sứ Bát Tràng tráng men lam cổ điển, nổi bật với họa tiết vẽ tay chim khổng tước (chim chim công) xòe đuôi bên hoa đào và hoa mai vô cùng tinh xảo, sống động. Sản phẩm mang ý nghĩa phong thủy may mắn, phú quý, rất thích hợp để trưng bày phòng khách hoặc không gian thờ cúng thêm phần trang trọng, uy nghi.",
  "img": "16.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 17,
  "cat": "loc-binh",
  "name": "Bình hút lộc màu trắng mệnh kim vẽ vàng Thuận Buồm Xuôi Gió",
  "brand": "Bát Tràng",
  "price": 1050000,
  "desc": "Bình tài lộc gốm sứ trắng cao cấp với dáng bóng hút tài lộc, nổi bật nhờ họa tiết thuyền buồm căng gió dát vàng 24k cùng chữ thư pháp \"Thuận Buồm Xuôi Gió\" vô cùng tinh xảo. Sản phẩm mang ý nghĩa phong thủy tốt lành về sự may mắn, trôi chảy trong công việc và kinh doanh, rất thích hợp để trưng bày bàn làm việc hoặc làm quà biếu tặng đối tác, tân gia sang trọng.",
  "img": "17.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 18,
  "cat": "loc-binh",
  "name": "Trứng phong thuỷ tài lộc Thuận Buồm Xuôi Gió Vinh Hoa Phú Quý",
  "brand": "Gốm Trường An",
  "price": 2500000,
  "desc": "Trứng phong thủy gốm sứ Bát Tràng cao cấp dáng quả trứng độc đáo, nổi bật với bức tranh \"Thuận Buồm Xuôi Gió\" vẽ tay tinh xảo kết hợp đường nét dát vàng sang trọng. Sản phẩm mang ý nghĩa tích tụ may mắn, chiêu tài đón lộc và đem lại sự trôi chảy trong công việc, vô cùng phù hợp để trưng bày không gian làm việc hoặc làm quà biếu cao cấp.",
  "img": "18.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 19,
  "cat": "loc-binh",
  "name": "Mai bình men trắng đắp nổi Công Danh Phúc Quý kênh bong vẽ vàng",
  "brand": "Gốm Trường An",
  "price": 13000000,
  "desc": "Bình hoa gốm sứ Bát Tràng cao cấp gây ấn tượng mạnh mẽ với nghệ thuật đắp nổi đôi chim khổng tước (chim công) và bông hoa mẫu đơn vô cùng sống động, kết hợp dát vàng 24k lộng lẫy trên nền sứ trắng. Sản phẩm biểu trưng cho sự phú quý, trường thọ và hạnh phúc viên mãn, rất thích hợp làm điểm nhấn trang trí phòng khách sang trọng hoặc làm quà tặng tân gia đẳng cấp.",
  "img": "19.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 20,
  "cat": "loc-binh",
  "name": "Bình hút tài lộc Thuận Buồm Xuôi Gió Phú Quý men hoàng thổ đùi dế",
  "brand": "Gốm Trường An",
  "price": 1750000,
  "desc": "Bình hút tài lộc gốm sứ Bát Tràng cao cấp sở hữu kiểu dáng phình to tích lộc, nổi bật với bức tranh chim chim công (khổng tước) xòe đuôi và hoa mẫu đơn vẽ tay nhiều màu sắc vô cùng tinh xảo, sinh động. Họa tiết mang ý nghĩa biểu tượng cho sự may mắn, thịnh vượng và hạnh phúc viên mãn, vô cùng thích hợp để bài trí nâng tầm không gian sống hoặc làm quà tặng tân gia sang trọng.",
  "img": "20.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 21,
  "cat": "lo-hoa",
  "name": "Lọ hoa men tiêu 3D dáng giỏi cua vẽ tay hoa bươm bướm",
  "brand": "Đang cập nhật",
  "price": 229000,
  "desc": "Lọ hoa gốm sứ Bát Tràng mang chất men gốm mộc màu kem ấm áp, nổi bật với họa tiết hoa hướng dương và hoa đồng tiền nhiều màu sắc được vẽ tay tươi sáng, nét cọ phóng khoáng. Thiết kế dáng bầu lùn vừa phải, gần gũi và mộc mạc, rất thích hợp để cắm các loại hoa tươi trang trí bàn trà, góc làm việc hoặc không gian sống hiện đại.",
  "img": "21.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 22,
  "cat": "lo-hoa",
  "name": "Bình hoa Bát Tràng trang trí decor dáng xoài vẽ bách hoa",
  "brand": "Bát Tràng",
  "price": 390000,
  "desc": "Lọ hoa gốm sứ Bát Tràng mang dáng dấp vừa vặn trang nhã, nổi bật với nước men gốm đốm xanh độc đáo kết hợp họa tiết chùm hoa rực rỡ nhiều màu sắc vẽ tay sinh động. Sản phẩm mang nét đẹp mộc mạc mà hiện đại, rất thích hợp dùng để cắm các loại hoa tươi hoặc trang trí bàn trà, góc làm việc và không gian phòng khách thêm tươi mới.",
  "img": "22.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 23,
  "cat": "lo-hoa",
  "name": "Lọ hoa men tiêu 3D cắm hoa dáng chai vát vẽ tay hoa bươm bướm",
  "brand": "Gốm Trường An",
  "price": 229000,
  "desc": "Lọ hoa gốm sứ Bát Tràng sở hữu dáng tháp (dáng loa) thanh thoát, ấn tượng với chất men gốm đốm mộc mạc cùng họa tiết hoa đồng tiền rực rỡ và cánh bướm vẽ tay mềm mại. Sản phẩm mang vẻ đẹp tự nhiên, mộc mạc mà hiện đại, rất thích hợp để cắm hoa tươi tạo điểm nhấn tươi sáng cho bàn trà, bàn làm việc hoặc không gian sống.",
  "img": "23.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 24,
  "cat": "lo-hoa",
  "name": "Lọ hoa Bát Tràng men hoả biến xanh đại dương dáng giỏ cua 4 cạnh",
  "brand": "Bát Tràng",
  "price": 390000,
  "desc": "Lọ hoa gốm sứ Bát Tràng độc đáo với dáng hình khối vuông bo góc thanh lịch, phủ nước men hỏa biến sắc xanh đại dương lấp lánh và có độ sâu huyền bí. Thiết kế mang phong cách hiện đại và đầy tính nghệ thuật, vừa thích hợp để cắm các loại hoa nghệ thuật vừa dùng làm vật phẩm trang trí tinh tế cho không gian sống.",
  "img": "24.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 25,
  "cat": "lo-hoa",
  "name": "Bình hoa trang trí tài lộc dáng vầng trăng",
  "brand": "Bát Tràng",
  "price": 290000,
  "desc": "Lọ hoa gốm sứ Bát Tràng nghệ thuật gây ấn tượng với tạo hình hình trăng khuyết màu đen bóng huyền bí kết hợp cùng hũ tròn sắc đỏ nổi bật ghi chữ thư pháp dát vàng \"Tài Lộc\". Sản phẩm vừa mang ý nghĩa phong thủy chiêu tài đón may mắn, vừa là vật phẩm trang trí vô cùng độc đáo, nâng tầm thẩm mỹ cho bàn làm việc, kệ sách hoặc không gian phòng khách hiện đại.",
  "img": "25.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 26,
  "cat": "tuong",
  "name": "Tượng sứ Phúc Lộc Thọ men rạn cổ",
  "brand": "Bát Tràng",
  "price": 1200000,
  "desc": "Bộ tượng Tam Đa Phúc Lộc Thọ gốm sứ Bát Tràng được chế tác thủ công tinh xảo, khắc họa sống động thần thái hoan hỷ, phúc hậu của ba vị thần. Sản phẩm khoác lên mình lớp men rạn cổ điển kết hợp màu men rêu, vàng đất trang nhã, trau chuốt tỉ mỉ từ dáng đứng đến các chi tiết cầm tay như em bé, gậy như ý và quả đào tiên. Bày trí bộ tượng trong nhà giúp thu hút tài lộc, sức khỏe, may mắn và mang lại vẻ đẹp trang trọng, phong thủy cho không gian sống.",
  "img": "26.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 27,
  "cat": "tuong",
  "name": "Tượng 18 Vị La Hán",
  "brand": "Bát Tràng",
  "price": 8500000,
  "desc": "Bộ tượng 18 vị La Hán gốm sứ Bát Tràng được đắp nặn vô cùng sống động, khắc họa chân thực thần thái, biểu cảm cùng tư thế đặc trưng của từng vị tôn giả. Sản phẩm khoác lên mình chất men rạn cổ điển trang nhã kết hợp sắc gốm mộc ấm áp, từng chi tiết pháp bảo, linh thú cưỡi như rồng, hổ, voi đều được chế tác vô cùng tỉ mỉ. Bày trí trọn bộ tượng mang ý nghĩa phong thủy trấn trạch, bình an và mang lại không gian thiền định, uy nghi cho phòng khách hay thư phòng.",
  "img": "27.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 28,
  "cat": "tuong",
  "name": "Tượng sứ Di Lặc ngũ phúc ngồi đài sen",
  "brand": "Bát Tràng",
  "price": 3600000,
  "desc": "Tượng Phật Di Lặc Ngũ Phúc gốm sứ Bát Tràng được chế tác thủ công tinh xảo, khắc họa hình ảnh Đức Phật Di Lặc với nụ cười hoan hỷ, từ hòa bên năm tiểu đồng vui đùa tinh nghịch. Sản phẩm nổi bật với sắc men bóng kết hợp các chi tiết dát vàng 24k sang trọng ở thỏi vàng, gậy như ý và chân đế hoa sen. Tác phẩm mang ý nghĩa phong thủy cầu mong may mắn, tài lộc, con cháu sum vầy và gia đạo an yên, vô cùng phù hợp để trưng bày tại phòng khách hoặc cửa hàng kinh doanh.",
  "img": "28.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 29,
  "cat": "tuong",
  "name": "Tượng thần tài thổ địa",
  "brand": "Gốm Trường An",
  "price": 1100000,
  "desc": "Bộ tượng Thần Tài - Thần Phát gốm sứ Bát Tràng được chế tác vô cùng tinh xảo, khắc họa sắc nét thần thái phúc hậu, hoan hỷ của hai vị thần ngự trên ngai vàng uy nghi. Sản phẩm nổi bật với sự kết hợp hài hòa giữa chất men lam truyền thống trên áo gấm và các đường nét dát vàng 24k lộng lẫy ở thỏi vàng, gậy như ý cùng dòng chữ \"CHIÊU TÀI TIẾN BẢO\". Tác phẩm mang ý nghĩa phong thủy sâu sắc về chiêu tài kích lộc, vượng khí và may mắn, rất thích hợp để bài trí tại bàn thờ Thần Tài, cửa hàng kinh doanh hoặc không gian sống sang trọng.",
  "img": "29.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 30,
  "cat": "tuong",
  "name": "Tượng sứ Khổng Minh Gia Cát Lượng men rạn",
  "brand": "Bát Tràng",
  "price": 1850000,
  "desc": "Tượng Gia Cát Lượng (Khổng Minh) gốm sứ Bát Tràng được chế tác thủ công tinh xảo, khắc họa sống động thần thái uy nghiêm, trí tuệ cùng tay cầm quạt lông vũ đặc trưng. Sản phẩm khoác lên mình lớp men rạn cổ điển trang nhã kết hợp các đường nét hoa văn đắp nổi trên vạt áo vô cùng tỉ mỉ và sắc nét. Bày trí tượng Khổng Minh trong nhà hoặc phòng làm việc mang ý nghĩa phong thủy khai thông trí tuệ, hỗ trợ công danh thăng tiến và trấn trạch trừ tà hiệu quả.",
  "img": "30.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 31,
  "cat": "gia-dung",
  "name": "Phin pha cafe Bát Tràng vẽ tay hoa đào",
  "brand": "Gốm Trường An",
  "price": 200000,
  "desc": "Bộ phin pha cà phê gốm sứ Bát Tràng cao cấp sở hữu lớp men gốm mộc màu kem trang nhã, kết hợp các họa tiết vẽ tay sinh động như hoa đào, hoa mai, cá chép và lá cây mộc mạc. Thiết kế trọn bộ gồm cốc, phin pha, nắp đậy và đĩa lót đồng bộ, giúp giữ trọn hương vị thơm ngon tinh túy của cà phê trong từng lần thưởng thức. Sản phẩm vừa mang nét đẹp thủ công truyền thống vừa mang tính tiện dụng cao, rất thích hợp sử dụng hàng ngày hoặc làm quà tặng ý nghĩa cho những người yêu thích cà phê.",
  "img": "31.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 32,
  "cat": "gia-dung",
  "name": "Khay mứt sứ men xanh bạc hà 5 cánh đế mây",
  "brand": "Bát Tràng",
  "price": 550000,
  "desc": "Khay mứt Tết gốm sứ Bát Tràng cao cấp sở hữu tạo hình cánh hoa mờ ngọc bích tươi mát, gồm 5 hũ cánh hoa cùng 1 hũ tròn trung tâm xếp gọn gàng trên khay mây tre đan tinh tế. Sản phẩm mang vẻ đẹp thanh lịch, hiện đại và tiện dụng, rất thích hợp để bày trí bánh mứt, hạt nẻ đón khách trong dịp Tết đến xuân về hoặc làm quà tặng tân gia ý nghĩa.",
  "img": "32.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 33,
  "cat": "gia-dung",
  "name": "Bộ bình nước men hoả biến xanh vẽ sen hàng nghệ nhân",
  "brand": "Bát Tràng",
  "price": 1299000,
  "desc": "Bộ bình chén uống nước gốm sứ Bát Tràng cuốn hút với nước men hỏa biến xanh đại dương huyền bí, điểm xuyết họa tiết hoa sen đắp nổi khắc tay vô cùng tỉ mỉ và mộc mạc. Thiết kế trọn bộ gồm bình đựng dạng ca cao có nắp, 6 chén nhỏ và đĩa lót dáng lá sen độc đáo, rất thích hợp để thưởng trà, tiếp khách sang trọng hoặc làm quà tặng tân gia ý nghĩa.",
  "img": "33.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 34,
  "cat": "gia-dung",
  "name": "Chum sành đựng gạo tài lộc",
  "brand": "Bát Tràng",
  "price": 390000,
  "desc": "Hũ gốm đựng gạo Bát Tràng nổi bật với chất gốm mộc màu nâu sẫm truyền thống, khoác lên mình họa tiết cành hoa đào mộc mạc cùng chữ thư pháp dát vàng \"Tài Lộc\" vô cùng tinh tế. Thiết kế nắp đậy kín đáo giúp bảo quản lương thực luôn khô ráo, đồng thời mang ý nghĩa phong thủy giữ gìn tài sản, tích tụ vượng khí và may mắn cho gia đình.",
  "img": "34.jpg",
  "status": "Còn hàng"
 },
 {
  "id": 35,
  "cat": "gia-dung",
  "name": "Chum sành ngâm rượu Trống Đồng Đông Sơn",
  "brand": "Bát Tràng",
  "price": 250000,
  "desc": "Hũ gốm Bát Tràng cao cấp gây ấn tượng mạnh mẽ với sắc gốm mộc đỏ nâu sẫm, điểm xuyết các đường nét hoa văn đắp nổi khắc họa hình ảnh chim Lạc và đời sống văn hóa Đông Sơn vô cùng tinh xảo, cổ kính. Thiết kế nắp đậy chắc chắn cùng kiểu dáng uy nghi, sản phẩm không chỉ mang giá trị nghệ thuật truyền thống độc đáo mà còn phù hợp làm vật phẩm phong thủy, tích tụ vượng khí cho gia đình.",
  "img": "35.jpg",
  "status": "Còn hàng"
 }
];
