```ts
    ODA:  OPEN DIGITAL ARCHITECTURE
    (kiến trúc mở)
    
    là 1 kiến trúc hệ thống , nơi mà hệ thống được phát triển theo chiều ngang thay vì qui trình silo như hiện tại 
    quy trình silo là gì : 
    là 1 quy trình , hay vòng đời phát triển phần mềm , hoặc 1 feature trong phần mềm ứng dụng 
    quy trình đó là : 
    nhận yêu cầu từ khách hàng -> lên đặc tả -> dev -> test -> golive
    
    còn với oda thì quy trình phát triển là : 
    - phân rã bài toán thành phần nghiệp vụ thành các phần nhỏ hơn,
    - mỗi phần đó là 1 service
    - trên mỗi 1 service này thì các phần api được phát triển độc lập
        có thể gắn kết với nhau thông qua các API dùng để liên kết linh động giữa các service 
    - tổ hợp các service này thì ta được 1 hệ thống microservice 
    
    điểm yếu của silo : 
    Để phát triển 1 nơi, sử dụng nhiều nơi thì phải thiết kế rất chuẩn 
    -> logic bị phức tạp khó bóc tách dẫn đến không làm riêng lẻ từng phần -> chậm thấy sản phẩm cuối
    
    Ứng dụng trong kiến trúc ODA:
    ứng dụng thay vì được thiết kế theo chức năng thì ODA được cấu thành từ các giải pháp
         mỗi giải pháp được xây dựng bằng cách tổ hợp lại các thành phần liên quan
    
    mỗi thành phẩn ở đây là 1 microservice triển khai 1 nhóm nghiệp vụ được định nghĩa trong eTom
    Vậy eTom là gì ? 
    eTOM  (enhanced Telecom Operations Map) trong kiến trúc Open Digital Architecture (ODA) 
    - là một mô hình tham chiếu chuẩn hóa, được sử dụng rộng rãi trong ngành viễn thông để mô tả và quản lý các quy trình nghiệp vụ.
         Nó giúp tổ chức viễn thông thiết kế, triển khai và cải tiến các hoạt động vận hành hiệu quả hơn.
        - eTom ra đời năm 2003
        - để chuẩn hoá quy trình vận hành doanh nghiệp viễn thông 
        - cách triển khai :
        -	hiểu về eTom
        -	đánh giá hiện trạng
        -	thiết kế trạng thái mới
        -	lên plan
        -	dev
        -	montoring
-
